
# Mobile Testing
Here is how to run the project, call api




## System Requirements

- **Java 21+**
- **Appium 2.0+**
- **IDE: Android Studio & Visual Studio Code**
- **Node.js (v14 or higher)**
## Step to run project

### Step 1: Install Android Studio

Link: https://developer.android.com/studio?hl=vi


### Step 2: Clone project

**Pre-requisite**: Git is required to clone

1. Open windows explorer
2. Choose the directory to clone 
3. Open git bash and copy paste this:

```bash
git clone https://github.com/gAmma05/Mobile-Testing
```

### Step 3: Open the repository folder through IDE

1. Open Android Studio
2. Open the folder where repository is placed
3. Open the folder which has the name "**DateTimeValidator**"
4. Open Visual Studio Code
5. Open the folder where repository is placed
6. Open the folder which has the name "**codeceptjs**"


### Step 4: Setup

1. In cmd, insert this line and enter to setup environment to use SDK
```cmd
set HTTP_PROXY=myserver:1981
```

2. Install dependencies
```bash
npm install
```

3. Install appium
```bash
npm install -g appium
```

4. Start appium server
```bash
appium
```

5. Check adb devices before running tests
////
**WARNING:** If you run this but it causes error, you must set path variable in system path
```bash
adb devices
```

If no devices is running, you have to run a device in Android Studio (16.0 or higher is required)

6. Run the tests
```bash
#In VSC, where the current directory is codeceptjs
npx codeceptjs run --steps

```

7. (Optional) You can delete appium server if you no longer use that
```bash
npm uninstall -g appium
```


