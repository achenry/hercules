Search.setIndex({"docnames": ["battery", "examples/06_amr_wind_standin_and_battery", "examples/07_amr_wind_standin_and_solar_pysam", "examples_overview", "install_instructions", "install_local", "install_on_kestrel", "install_spack", "intro", "order_of_op", "solar_pv"], "filenames": ["battery.md", "examples/06_amr_wind_standin_and_battery.md", "examples/07_amr_wind_standin_and_solar_pysam.md", "examples_overview.md", "install_instructions.md", "install_local.md", "install_on_kestrel.md", "install_spack.md", "intro.md", "order_of_op.md", "solar_pv.md"], "titles": ["Battery", "Example 06: AMR Wind Standin and Battery", "Example 07: AMR Wind Standin and Solar PySAM", "Examples Overview", "Installation", "Local installation instructions", "Installation on Kestrel", "Spack installation of AMR Wind code", "Hercules", "Order of operations", "Solar PV"], "terms": {"There": 0, "ar": [0, 4, 5, 6, 7], "two": [0, 10], "model": [0, 1, 2, 5, 6, 10], "current": [0, 4, 5, 6], "implement": [0, 5, 6], "hercul": [0, 1, 2, 3, 5], "both": [0, 5], "interact": [0, 5], "through": 0, "simpl": [0, 1], "wrapper": 0, "class": 0, "defin": [0, 5], "yaml": [0, 5, 10], "file": [0, 5, 6, 10], "us": [0, 1, 2, 5, 6, 7, 8, 9, 10], "initi": 0, "emul": [0, 5], "py_sim_typ": 0, "energy_capac": 0, "kwh": 0, "charge_r": 0, "kw": 0, "max_soc": 0, "between": 0, "0": [0, 5, 6, 7], "1": [0, 6], "min_soc": 0, "initial_condit": 0, "soc": 0, "onc": [0, 5, 6], "i": [0, 1, 2, 5, 6, 7, 9, 10], "onli": [0, 6], "step": [0, 5, 9], "method": 0, "pass": 0, "dict": 0, "name": [0, 5, 6, 7], "which": [0, 5, 6, 9], "must": 0, "have": [0, 5, 6], "follow": [0, 1, 2, 5, 6, 7], "field": 0, "py_sim": [0, 9], "battery_sign": 0, "____": 0, "available_pow": 0, "return": 0, "contain": 0, "valu": 0, "power": [0, 5, 6, 10], "The": [0, 1, 5, 6, 7, 10], "charg": 0, "discharg": 0, "reject": 0, "amount": 0, "request": [0, 5], "could": 0, "fulfil": 0, "can": [0, 5, 6, 7, 10], "posit": 0, "neg": 0, "state": [0, 5, 6, 9], "e_t": 0, "sum_": 0, "k": 0, "t": [0, 5], "p_k": 0, "delta": 0, "where": [0, 6, 7], "energi": [0, 8, 10], "store": 0, "p_t": 0, "time": [0, 7, 9], "e": [0, 5, 6, 7, 9, 10], "p": [0, 5], "constrain": 0, "upper": 0, "lower": 0, "limit": 0, "underlin": 0, "leq": 0, "overlin": 0, "lithium": 0, "ion": 0, "base": [0, 5, 6], "cell": 0, "present": 0, "main": [0, 5, 6, 7], "differ": 0, "includ": [0, 3, 6, 7, 10], "diffus": [0, 10], "transient": 0, "loss": 0, "an": [0, 5], "equival": 0, "circuit": 0, "approach": [0, 6], "m": 0, "tran": 0, "et": 0, "al": 0, "A": [0, 5, 10], "comprehens": 0, "incorpor": 0, "effect": 0, "health": 0, "temperatur": [0, 10], "journal": 0, "storag": 0, "vol": 0, "43": 0, "103252": 0, "nov": 0, "2021": [0, 6], "doi": 0, "10": [0, 6, 10], "1016": 0, "j": [0, 6], "est": 0, "thi": [1, 2, 5, 6, 7, 10], "demonstr": [1, 2, 3], "how": [1, 2, 5, 6], "case": [1, 5, 6], "set": [1, 4, 5, 7, 9], "amr_standin_data": 1, "csv": [1, 10], "gener": [1, 6, 10], "script": [1, 6], "generate_amr_standin_data": 1, "py": [1, 5], "tool": 1, "directori": [1, 5, 7], "call": [1, 5], "start": [1, 5, 6], "bash": [1, 2, 5, 6, 7], "process": [1, 5, 6, 7], "To": [1, 2, 5, 7], "execut": [1, 2, 6], "command": [1, 2, 5, 6], "termin": [1, 2, 5, 7], "sbatch_script": 1, "sh": [1, 2, 5, 6, 7], "make": [1, 2, 6], "sure": [1, 2, 5, 6, 7], "conda": [1, 2, 5], "venv": [1, 2], "activ": [1, 2, 5, 6], "befor": [1, 2, 6], "batch_script": [2, 6], "sever": 3, "usag": 3, "number": 3, "kei": [3, 6], "configur": 3, "still": 4, "work": [4, 5], "progress": 4, "3": [4, 5, 6, 7], "instruct": [4, 6], "local": [4, 6], "kestrel": [4, 7], "via": [4, 6], "spack": [4, 6], "creat": 5, "new": 5, "environ": [5, 6], "python": [5, 6], "11": [5, 6], "If": [5, 6], "you": [5, 6, 7], "haven": 5, "alreadi": [5, 6], "clone": [5, 6, 7], "git": [5, 6, 7], "http": [5, 6, 7], "github": [5, 6, 7], "com": [5, 6, 7], "nrel": [5, 7, 10], "Then": [5, 6], "pip": [5, 6], "possibli": [5, 9], "cd": [5, 6, 7], "switch": [5, 6], "develop": [5, 6], "branch": [5, 6], "sea": 5, "also": [5, 6, 7], "requir": [5, 6, 10], "blob": [5, 6], "tar": [5, 6], "gz": [5, 6], "raw": [5, 6], "true": [5, 6], "fail": [5, 6], "mai": [5, 6, 10], "instead": [5, 6], "need": [5, 6, 7], "permiss": [5, 6], "gov": [5, 6], "fetch": [5, 6, 7], "all": [5, 6, 7, 9], "dv": [5, 6], "emuwind": [5, 6], "older": 5, "version": [5, 7], "g": [5, 6, 7, 9, 10], "one": 5, "eagl": 5, "don": 5, "featur": 5, "checkout": [5, 6, 7], "electrolyz": 5, "": [5, 6, 7, 10], "pysam": [5, 10], "softwar": [5, 6], "4": [5, 6, 7], "2": [5, 6, 7], "want": [5, 6, 7], "flori": 5, "standin": [5, 6], "amr": 5, "wind": [5, 10], "steadi": [5, 6], "represent": [5, 6], "farm": [5, 6], "flow": [5, 6], "In": [5, 6, 7], "v4": [5, 6], "get": [5, 6], "correct": [5, 6], "error": [5, 6], "pyyaml": [5, 6], "miss": [5, 6], "c": [5, 6], "forg": [5, 6], "hybrid": [5, 8], "open": [5, 7], "control": [5, 8, 9], "whoc": 5, "platform": [5, 6], "packag": [5, 6, 7, 10], "essenti": 5, "itself": 5, "ani": [5, 6], "exampl": [5, 7, 10], "06": [5, 6], "ha": [5, 6], "batteri": [5, 6], "output": [5, 6, 9], "go": [5, 6, 7], "back": [5, 6], "herc_root": [5, 6], "note": [5, 6, 7], "newest": [5, 6], "updat": [5, 6, 9], "repositori": [5, 6, 7], "launch": 5, "separ": [5, 10], "each": [5, 10], "your": [5, 6, 7], "first": [5, 7], "helics_brok": 5, "f": [5, 9], "consoleloglevel": 5, "trace": 5, "loglevel": 5, "debug": 5, "local_port": 5, "helics_port": 5, "from": [5, 9, 10], "second": 5, "third": 5, "navig": 5, "example_case_fold": [5, 6], "example_sim_05": 5, "ll": 5, "hercules_runscript_dummy_amr": 5, "amr_input": [5, 6], "inp": [5, 6], "other": [5, 6], "hercules_runscript": 5, "hercules_input_000": 5, "dummi": 5, "stand": 5, "These": [5, 7, 10], "connect": [5, 9], "co": [5, 10], "simul": [5, 6, 8], "should": [5, 9, 10], "see": [5, 7], "printout": 5, "print": 5, "screen": 5, "altern": 5, "up": [5, 7], "bash_script": [5, 6, 7], "howev": 5, "hang": 5, "check": 5, "multipl": 5, "tell": 5, "kill": 5, "do": [5, 7], "pair": 5, "id": 5, "fill": 5, "blank": 5, "below": 5, "pid": 5, "full": [5, 6], "like": [5, 6], "hpc": [5, 6, 7], "detail": [5, 6, 10], "section": [5, 6], "after": 5, "reconnect": 5, "help": [5, 6], "disconnect": 5, "detach": 5, "later": 5, "while": [5, 7], "keep": 5, "session": 5, "ctrl": 5, "d": [5, 7], "r": 5, "exist": 5, "otherwis": 5, "next": [5, 6, 7], "node": 5, "my": 5, "save": [5, 7, 9], "alia": 5, "matt": 5, "interactive_4node_high": 5, "when": [5, 7], "line": [5, 6, 7], "someth": [5, 6], "rxxxnxx": 5, "grant": 5, "amrwind": [5, 9], "setup": 5, "function": [5, 6], "bashrc": [5, 6], "bash_profil": 5, "amr_env_emul": 5, "document": [6, 7, 8], "outlin": [6, 7], "onto": [6, 7], "comput": [6, 9], "same": 6, "those": 6, "complet": 6, "log": [6, 7], "establish": [6, 9], "root": 6, "folder": [6, 10], "home": [6, 7], "user": [6, 7], "enter": 6, "remain": 6, "load": 6, "anaconda3": 6, "edit": 6, "shortcut": 6, "env_hercul": 6, "purg": 6, "crayp": 6, "x86": 6, "spr": 6, "intel": 6, "oneapi": 6, "mpi": [6, 7], "compil": 6, "2023": 6, "netcdf": 6, "9": 6, "40": 6, "nopt": 6, "app": 6, "test": 6, "applic": 6, "helic": [6, 7, 9], "crai": 6, "mpich": 6, "special": 6, "encount": 6, "author": 6, "issu": 6, "add": [6, 7], "ssh": 6, "machin": 6, "chmod": 6, "700": 6, "600": 6, "untest": 6, "look": 6, "02_amr_wind_standin_onli": 6, "port": 6, "32000": 6, "32001": 6, "sourc": [6, 7], "easiest": 6, "support": 6, "wai": 6, "code": 6, "now": 6, "successfulli": 6, "some": [6, 7], "submit": 6, "batch": 6, "export": [6, 7], "spack_manag": [6, 7], "absolut": [6, 7], "path": [6, 7], "manag": [6, 7], "quick": [6, 7], "built": 6, "build": 6, "found": 6, "insid": 6, "environment_hercul": [6, 7], "gsmvjb3": 6, "openfast": [6, 7], "turbin": 6, "rosco": [6, 7], "point": 6, "toward": 6, "librari": 6, "servodyn": 6, "input": 6, "locat": [6, 10], "tricki": 6, "me": 6, "live": 6, "opt": 6, "linux": 6, "rhel8": 6, "icelak": 6, "gcc": 6, "8": 6, "5": 6, "weyrffl5hydj6eep6ndkezes4iejmzqu": 6, "lib": 6, "libdiscon": 6, "so": 6, "chang": [6, 10], "dll_filenam": 6, "dynam": 6, "dll": 6, "window": 6, "blade": 6, "format": 6, "interfac": 6, "For": [6, 7], "01_amr_wind_onli": 6, "begin": 6, "mpirun": 6, "appear": 6, "n": 6, "72": 6, "amr_wind": 6, "logamr": 6, "necessari": [6, 7], "queue": 6, "sbatch": 6, "mainli": 6, "cmake": 6, "maco": 6, "readthedoc": 6, "io": [6, 7], "en": 6, "dev": [6, 7], "index": 6, "html": 6, "relev": 6, "tag": 6, "v3": 6, "mkdir": [6, 7], "mkl": 6, "omp_proc_bind": 6, "spread": 6, "kmp_affin": 6, "balanc": 6, "dbuild_shared_lib": 6, "ON": 6, "ddouble_precis": 6, "bool": 6, "off": 6, "dcmake_install_prefix": 6, "36": 6, "With": 6, "shell": 6, "abov": 6, "mention": 6, "latest": 6, "2nd": 6, "level": 6, "todo": [6, 9], "yet": 6, "succesful": 6, "exawind": [6, 7], "d917dca2": 6, "submodul": [6, 7], "init": 6, "recurs": [6, 7], "past": 6, "build_script": 6, "top": 6, "It": 6, "import": 6, "locaiton": 6, "match": 6, "bin": 6, "l": 6, "rm": 6, "rf": 6, "damr_wind_enable_cuda": 6, "damr_wind_enable_mpi": 6, "damr_wind_enable_openmp": 6, "damr_wind_test_with_fcompar": 6, "dcmake_build_typ": 6, "releas": 6, "damr_wind_enable_netcdf": 6, "dnetcdf_dir": 6, "ecom": 6, "hpacf": 6, "2020": 6, "07": 6, "centos7": 6, "skylake_avx512": 6, "7": 6, "533s5vfhvbbvpgxambbzk66vtlcce2u6": 6, "damr_wind_enable_openfast": 6, "dopenfast_root": 6, "pfleme": 6, "damr_wind_enable_hypr": 6, "damr_wind_enable_masa": 6, "damr_wind_enable_hel": 6, "damr_wind_enable_test": 6, "damr_wind_enable_fortran": 6, "dcmake_export_compile_command": 6, "damr_wind_enable_all_warn": 6, "nice": 6, "j32": 6, "high": 7, "fidel": 7, "portion": 7, "system": [7, 10], "more": 7, "inform": [7, 10], "repo": 7, "achiev": 7, "run": 7, "sandialab": 7, "pull": 7, "modul": [7, 9, 10], "origin": [7, 9], "although": 7, "strictli": 7, "handi": 7, "everi": 7, "vim": 7, "editor": 7, "insert": 7, "text": 7, "press": 7, "esc": 7, "stop": 7, "wq": 7, "quit": 7, "describ": 7, "reopen": 7, "well": [7, 10], "automat": 7, "last": 7, "its": 7, "depend": 7, "take": 7, "littl": 7, "final": 7, "rush": 7, "becaus": 7, "larg": 8, "eddi": 8, "onlin": 8, "discuss": 9, "readm": 9, "instanti": 9, "intial": 9, "condit": [9, 10], "get_output": 9, "action": 9, "u_k": 9, "h": 9, "y_k": 9, "d_k": 9, "record": 9, "signal": 9, "x_": 9, "x_k": 9, "y_": 9, "compon": 9, "what": 9, "solarpysam": 10, "nation": 10, "renew": 10, "laboratori": 10, "advisor": 10, "sam": 10, "predict": 10, "plant": 10, "photovolta": 10, "pvsamv1": 10, "calcul": 10, "electr": 10, "invert": 10, "specifi": 10, "weather": 10, "nonannualsimul": 10, "sample_data": 10, "interpol": 10, "daytim": 10, "timestamp": 10, "direct": 10, "normal": 10, "irradi": 10, "dni": 10, "horizont": 10, "dhi": 10, "global": 10, "ghi": 10, "speed": 10, "air": 10, "dry": 10, "bulb": 10, "json": 10, "design": 10, "100mw_1axis_pvsamv1": 10, "latitud": 10, "longitud": 10, "elev": 10, "07_amr_wind_standin_and_solar_pysam": 10, "2018": 10, "golden": 10, "100": 10, "mw": 10, "singl": 10, "axi": 10, "track": 10, "gui": 10, "ac": 10, "power_mw": 10, "net": 10, "dc": 10, "dc_power_mw": 10, "timestep": 10, "angl": 10, "incid": 10, "aoi": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"batteri": [0, 1], "paramet": 0, "input": [0, 10], "output": [0, 10], "simplebatteri": 0, "lib": 0, "refer": [0, 10], "exampl": [1, 2, 3, 6], "06": 1, "amr": [1, 2, 6, 7], "wind": [1, 2, 6, 7], "standin": [1, 2], "descript": [1, 2], "run": [1, 2, 5, 6, 9], "note": [1, 2], "07": 2, "solar": [2, 10], "pysam": [2, 6], "overview": 3, "instal": [4, 5, 6, 7], "local": 5, "instruct": 5, "kestrel": [5, 6], "initi": [6, 7, 9], "step": [6, 7], "access": 6, "middl": 6, "creat": [6, 7], "hercul": [6, 7, 8], "conda": 6, "enviro": 6, "sea": 6, "from": 6, "public": 6, "repo": 6, "electrolyz": 6, "modul": 6, "flori": 6, "nrel": 6, "hybrid": 6, "open": 6, "control": 6, "whoc": 6, "try": 6, "an": 6, "final": 6, "set": 6, "up": 6, "job": 6, "spack": 7, "code": 7, "ad": 7, "bash_profil": 7, "start": 7, "environ": 7, "order": 9, "oper": 9, "main": 9, "k": 9, "0": 9, "1": 9, "2": 9, "3": 9, "dot": 9, "pv": 10}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Battery": [[0, "battery"]], "Parameters": [[0, "parameters"]], "Inputs": [[0, "inputs"], [10, "inputs"]], "Outputs": [[0, "outputs"], [10, "outputs"]], "SimpleBattery": [[0, "simplebattery"]], "LIB": [[0, "lib"]], "References": [[0, "references"], [10, "references"]], "Example 06: AMR Wind Standin and Battery": [[1, "example-06-amr-wind-standin-and-battery"]], "Description": [[1, "description"], [2, "description"]], "Running": [[1, "running"], [2, "running"]], "Notes": [[1, "notes"], [2, "notes"]], "Example 07: AMR Wind Standin and Solar PySAM": [[2, "example-07-amr-wind-standin-and-solar-pysam"]], "Examples Overview": [[3, "examples-overview"]], "Installation": [[4, "installation"], [5, "installation"]], "Local installation instructions": [[5, "local-installation-instructions"]], "Running [Local]": [[5, "running-local"]], "Running [Kestrel]": [[5, "running-kestrel"]], "Installation on Kestrel": [[6, "installation-on-kestrel"]], "Initial Steps: Accessing Kestrel": [[6, "initial-steps-accessing-kestrel"]], "Middle Steps: Creating the Hercules conda enviroment": [[6, "middle-steps-creating-the-hercules-conda-enviroment"]], "Install SEAS": [[6, "install-seas"]], "Install SEAS from public repo": [[6, "install-seas-from-public-repo"]], "Install Hercules": [[6, "install-hercules"]], "Install electrolyzer module": [[6, "install-electrolyzer-module"]], "Install PySAM": [[6, "install-pysam"]], "Install FLORIS": [[6, "install-floris"]], "Install the NREL Wind Hybrid Open Controller (WHOC)": [[6, "install-the-nrel-wind-hybrid-open-controller-whoc"]], "Try an example!": [[6, "try-an-example"]], "Final Steps: Setting up AMR-WIND": [[6, "final-steps-setting-up-amr-wind"]], "Running Hercules": [[6, "running-hercules"]], "Running a job": [[6, "running-a-job"]], "Spack installation of AMR Wind code": [[7, "spack-installation-of-amr-wind-code"]], "Initial steps": [[7, "initial-steps"]], "Installing spack": [[7, "installing-spack"]], "Adding spack to bash_profile": [[7, "adding-spack-to-bash-profile"]], "Starting spack": [[7, "starting-spack"]], "Creating a Hercules environment": [[7, "creating-a-hercules-environment"]], "Hercules": [[8, "hercules"]], "Order of operations": [[9, "order-of-operations"]], "Initialization": [[9, "initialization"]], "Main run: for k = 0, 1, 2, 3, \\dots": [[9, "main-run-for-k-0-1-2-3-dots"]], "Solar PV": [[10, "solar-pv"]]}, "indexentries": {}})