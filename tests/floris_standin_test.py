from pathlib import Path

import numpy as np
import pytest
from floris.tools import FlorisInterface
from hercules.amr_wind_standin import AMRWindStandin
from hercules.floris_standin import (
    construct_floris_from_amr_input,
    default_floris_dict,
    FlorisStandin,
)
from SEAS.federate_agent import FederateAgent

AMR_INPUT = Path(__file__).resolve().parent / "test_inputs" / "amr_input_florisstandin.inp"
AMR_EXTERNAL_DATA = Path(__file__).resolve().parent / "test_inputs" / "amr_standin_data.csv"

CONFIG = {
    "name": "floris_standin",
    "gridpack": {},
    "helics": {
        "deltat": 1.0,
        "subscription_topics": ["control"],
        "publication_topics": ["status"],
        "endpoints": [],
        "helicsport": None,
    },
    "publication_interval": 1,
    "endpoint_interval": 1,
    "starttime": 0,
    "stoptime": 10.0,
    "Agent": "floris_standin",
}


def test_construct_floris_from_amr_input():
    fi_test = construct_floris_from_amr_input(AMR_INPUT)
    assert isinstance(fi_test, FlorisInterface)


def test_FlorisStandin_instantiation():
    # Check instantiates correctly
    floris_standin = FlorisStandin(CONFIG, AMR_INPUT)

    # Check inheritance
    assert isinstance(floris_standin, FederateAgent)
    assert isinstance(floris_standin, AMRWindStandin)

    # Get FLORIS equivalent, match layout and turbines
    fi_true = FlorisInterface(default_floris_dict)
    fi_true.set(
        layout_x=floris_standin.fi.layout_x,
        layout_y=floris_standin.fi.layout_y,
        turbine_type=floris_standin.fi.floris.farm.turbine_definitions,
    )

    assert fi_true.floris.as_dict() == floris_standin.fi.floris.as_dict()


def test_FlorisStandin_get_step_yaw_angles():
    floris_standin = FlorisStandin(CONFIG, AMR_INPUT)

    # Get FLORIS equivalent, match layout and turbines
    fi_true = FlorisInterface(default_floris_dict)
    fi_true.set(
        layout_x=floris_standin.fi.layout_x,
        layout_y=floris_standin.fi.layout_y,
        turbine_type=floris_standin.fi.floris.farm.turbine_definitions,
    )

    default_wind_direction = 240.0  # Matches default in FlorisStandin
    default_wind_speed = 8.0  # Matches default in FlorisStandin

    # Test with None yaw angles
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(5.0)
    fi_true.set(wind_speeds=[default_wind_speed], wind_directions=[default_wind_direction])
    fi_true.run()
    fi_true_tp = fi_true.get_turbine_powers() / 1000 # kW expected

    assert fs_ws == default_wind_speed
    assert fs_wd == default_wind_direction
    assert fs_twd == [default_wind_direction] * 2
    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Test with any "no value" yaw angles (should apply no yaw angle)
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(5.0, yaw_angles=[-1000, 20])
    
    assert fs_ws == default_wind_speed
    assert fs_wd == default_wind_direction
    assert fs_twd == [default_wind_direction] * 2
    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Test with aligned turbines
    yaw_angles = [240.0, 240.0]
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(5.0, yaw_angles)
    fi_true.set(wind_speeds=[default_wind_speed], wind_directions=[default_wind_direction])
    fi_true.run()
    fi_true_tp = fi_true.get_turbine_powers() / 1000 # kW expected

    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Test with misaligned turbines
    yaw_angles = [260.0, 230.0]
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(5.0, yaw_angles)
    fi_true.set(wind_speeds=[default_wind_speed], wind_directions=[default_wind_direction])
    fi_true.run()  # Don't expect to work
    fi_true_tp = fi_true.get_turbine_powers() / 1000
    assert not np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Correct yaw angles
    fi_true.set(yaw_angles=default_wind_direction - np.array([yaw_angles]))
    fi_true.run()
    fi_true_tp = fi_true.get_turbine_powers() / 1000 # kW expected
    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Test that yaw angles are maintained from the previous step if large misalignments are provided
    yaw_angles = [0.0, 10.0]
    _, _, fs_tp2, _ = floris_standin.get_step(5.0, yaw_angles)
    assert np.allclose(fs_tp, fs_tp2)
    assert np.allclose(
        default_wind_direction-floris_standin.fi.floris.farm.yaw_angles,
        [260.0, 230.0]
    )

def test_FlorisStandin_get_step_power_setpoints():
    floris_standin = FlorisStandin(CONFIG, AMR_INPUT)

    # Get FLORIS equivalent, match layout and turbines
    fi_true = FlorisInterface(default_floris_dict)
    fi_true.set(
        layout_x=floris_standin.fi.layout_x,
        layout_y=floris_standin.fi.layout_y,
        turbine_type=floris_standin.fi.floris.farm.turbine_definitions,
    )

    default_wind_direction = 240.0  # Matches default in FlorisStandin
    default_wind_speed = 8.0  # Matches default in FlorisStandin

    # Test with power setpoints
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(5.0, power_setpoints=[1e3, 1e3])
    fi_true.set(wind_speeds=[default_wind_speed], wind_directions=[default_wind_direction])
    fi_true.run() # don't expect to work
    fi_true_tp = fi_true.get_turbine_powers() / 1000
    assert not np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Correct power setpoints
    fi_true.set(power_setpoints=np.array([[1e6, 1e6]]))
    fi_true.run()
    fi_true_tp = fi_true.get_turbine_powers() / 1000 # kW expected
    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Mixed power setpoints
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(5.0, power_setpoints=[None, 1e3])
    fi_true.set(power_setpoints=np.array([[None, 1e6]]))
    fi_true.run()
    fi_true_tp = fi_true.get_turbine_powers() / 1000
    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())

    # Test with invalid combination of yaw angles and power setpoints
    with pytest.raises(ValueError):
        floris_standin.get_step(5.0, yaw_angles=[230.0, 240.0], power_setpoints=[1e3, 1e3])
    
    # Test with valid combination of yaw angles and power setpoints
    yaw_angles = [260.0, 240.0]
    power_setpoints = [None, 1e3]
    fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(
        5.0,
        yaw_angles=yaw_angles,
        power_setpoints=power_setpoints
    )
    floris_power_setpoints = np.array([power_setpoints])
    floris_power_setpoints[0,1] *= 1e3 
    fi_true.set(
        yaw_angles=default_wind_direction - np.array([yaw_angles]),
        power_setpoints=floris_power_setpoints
    )
    fi_true.run()
    fi_true_tp = fi_true.get_turbine_powers() / 1000
    assert np.allclose(fs_tp, fi_true_tp.flatten().tolist())


def test_FlorisStandin_with_standin_data_yaw_angles():
    floris_standin = FlorisStandin(CONFIG, AMR_INPUT, AMR_EXTERNAL_DATA)

    yaw_angles_all = [
        [240.0, 240.0],
        [240.0, 240.0],  # Step up from 8 to 10 m/s
        [240.0, 240.0],
        [240.0, 240.0],  # Step back down to 8 m/s
        [240.0, 240.0],  # wd changes to 270.0 here
        [270.0, 270.0],  # change to match wd
        [270.0, 270.0],
        [250.0, 270.0],  # Apply simple wake steering
        [250.0, 270.0],
        [250.0, 270.0],
    ]

    # Initialize storage
    fs_ws_all = []
    fs_wd_all = []
    fs_tp_all = []
    fs_twd_all = []
    for i, s in enumerate(np.arange(0, 10.0, 1.0)):
        fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(s, yaw_angles=yaw_angles_all[i])
        fs_ws_all.append(fs_ws)
        fs_wd_all.append(fs_wd)
        fs_tp_all.append(fs_tp)
        fs_twd_all.append(fs_twd)

    # Check standin data mapped over correctly
    assert fs_ws_all == floris_standin.standin_data.amr_wind_speed.to_list()
    assert fs_wd_all == floris_standin.standin_data.amr_wind_direction.to_list()
    assert np.allclose(
        np.array(fs_twd_all)[:, 0], floris_standin.standin_data.amr_wind_direction.values
    )

    # Check power behaves as expected
    # Same condition for each
    fs_tp_all = np.array(fs_tp_all)
    assert np.allclose(fs_tp_all[0, :], fs_tp_all[3, :])
    # Higher power at 10 than 8 m/s
    assert (np.array(fs_tp_all[0, :]) < np.array(fs_tp_all[1, :])).all()
    # Same power at upstream turbine, lower power at downstream turbine when aligned
    assert fs_tp_all[5, 0] == fs_tp_all[0, 0]
    assert fs_tp_all[5, 1] < fs_tp_all[0, 1]
    # Lower power at upstream turbine, higher power at downstream turbine when steering,
    # total power uplift
    assert fs_tp_all[7, 0] < fs_tp_all[6, 0]
    assert fs_tp_all[7, 1] > fs_tp_all[6, 1]
    assert fs_tp_all[7, :].sum() > fs_tp_all[6, :].sum()
    # More power steering at 10m/s than 8m/s
    assert fs_tp_all[9, :].sum() > fs_tp_all[7, :].sum()

def test_FlorisStandin_with_standin_data_power_setpoints():
    floris_standin = FlorisStandin(CONFIG, AMR_INPUT, AMR_EXTERNAL_DATA)

    power_setpoints_all = [
        [None, None],
        [None, None],  # Step up from 8 to 10 m/s
        [None, None],
        [None, None],  # Step back down to 8 m/s
        [None, None],  # wd changes to 270.0 here
        [1e3, None],  # Apply a power setpoint at upstream turbine
        [1e3, 1e3], # Apply a power setpoint at both turbines
        [None, 1e3],  # Apply a power setpoint at downstream turbine
        [None, None],
        [None, None],
    ]

    # Initialize storage
    fs_ws_all = []
    fs_wd_all = []
    fs_tp_all = []
    fs_twd_all = []
    for i, s in enumerate(np.arange(0, 10.0, 1.0)):
        fs_ws, fs_wd, fs_tp, fs_twd = floris_standin.get_step(
            s,
            power_setpoints=power_setpoints_all[i]
        )
        fs_ws_all.append(fs_ws)
        fs_wd_all.append(fs_wd)
        fs_tp_all.append(fs_tp)
        fs_twd_all.append(fs_twd)

    # Check power behaves as expected
    # Same condition for each
    fs_tp_all = np.array(fs_tp_all)
    assert np.allclose(fs_tp_all[0, :], fs_tp_all[3, :])
    # Higher power at 10 than 8 m/s
    assert (np.array(fs_tp_all[0, :]) < np.array(fs_tp_all[1, :])).all()
    # Same power at upstream turbine, lower power at downstream turbine when aligned
    assert fs_tp_all[4, 0] == fs_tp_all[0, 0]
    assert fs_tp_all[4, 1] < fs_tp_all[0, 1]
    # Turbines match setpoint when set
    assert fs_tp_all[5, 0] == 1e3
    assert fs_tp_all[5, 1] > 1e3
    assert (fs_tp_all[6, :] == 1e3).all()
    assert fs_tp_all[7, 0] > 1e3
    assert fs_tp_all[7, 1] <= 1e3
