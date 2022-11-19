import os
import sys
import maya.OpenMayaUI as omui
from maya import cmds
from PySide2 import QtCore, QtGui, QtWidgets
from shiboken2 import wrapInstance


def maya_main_window():
    main_window_ptr = omui.MQtUtil.mainWindow()
    return wrapInstance(long(main_window_ptr), QtWidgets.QWidget)


def findPath(mayaPath):
    version = cmds.about(version=True)
    if (mayaPath.endswith('maya/' + version + '/prefs/scripts')):
        return True
    else:
        return False


def main():

    # Copy this script to your Maya Folder in order to load
    # and use the Framethrower_UI Script, without manipulating
    # the original script

    # The Absolute path on your system for the framethrower UI script
    absPathForFT = '/Users/jake/framethrower/packages/maya/framethrower_UI.py'

    # The End point for the environment you'd like to test on.
    envEndPoint = 'https://o31e692m9h.execute-api.us-east-1.amazonaws.com/staging'

    # The serialKey of the user you would like to post as
    serialKey = 'cc96d623-9ecf-4f30-8561-87e6f83cb542'

    # The Cache folder you'd like to playblast to
    cacheFolder = '/Users/jake/cache'

    # The plugin version - First entry in serverless/src/maya/pluginVersion.js
    version_string = 'afaodz'

    str = open(absPathForFT, 'r').read()

    newScript = str.replace('THISISTHEURL', envEndPoint).replace(
        'CACHEPATH', cacheFolder).replace('00000000-0000-0000-0000-000000000000', serialKey).replace('VERSIONSTRING', version_string)

    exec(newScript)

    destPath = filter(findPath, sys.path)[0]

    text_file = open(destPath + "/framethrower_temp.py", "wt")
    text_file.write(newScript)
    text_file.close()

    import framethrower_temp
    reload(framethrower_temp)
    framethrower_temp.framethrower.show_UI()

    os.remove(destPath + "/framethrower_temp.py")


main()
