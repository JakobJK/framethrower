from PySide2 import QtCore, QtGui, QtWidgets
from shiboken2 import wrapInstance
import platform
import uuid
from datetime import date
import json
import sys
from os import path
import shiboken2
import maya.cmds as cmds
import maya.mel as mel
import maya.OpenMayaUI as omui
import platform
from functools import partial

try:
    import requests
except:
    pass


def maya_main_window():
    main_window_ptr = omui.MQtUtil.mainWindow()
    return wrapInstance(long(main_window_ptr), QtWidgets.QWidget)


class framethrower(QtWidgets.QMainWindow):

    qmw_instance = None

    @classmethod
    def show_UI(cls):
        if not cls.qmw_instance:
            cls.qmw_instance = framethrower()

        if cls.qmw_instance.isHidden():
            cls.qmw_instance.show()
        else:
            cls.qmw_instance.raise_()
            cls.qmw_instance.activateWindow()

    def __init__(self, mayaMain=maya_main_window()):
        super(framethrower, self).__init__(
            mayaMain, QtCore.Qt.WindowStaysOnTopHint)
        self.codec = 'qt' if platform.system() == 'Windows' else 'avfoundation'
        self.minTime = int(cmds.playbackOptions(q=True, minTime=True))
        self.maxTime = int(cmds.playbackOptions(q=True, maxTime=True))
        self.setWindowTitle("Framethrower Submitter")
        self.requestLoaded = False
        self.sjAnimRange = None
        self.sjFramerate = None
        self.output = None
        self.amaxf = 1  # Max Frame Length
        self.keepLastProjectFrameRange = True
        self.newProject = False
        self.proFeedback = False
        self.jwt = ''
        self.projects = {}
        self.startFrame = 1
        self.endFrame = 250
        self.feedbackAmounts = 0
        self.title = ''
        self.submission_comment = ''
        self.animationId = ''
        self.model = QtGui.QStandardItemModel()
        self.currentFPS = cmds.currentUnit(query=True, time=True)

        self.versionString = 'VERSIONSTRING'
        self.versionNumber = 'VERSIONNUMBER'
        self.origin = 'THISISTHEORIGIN'
        self.uriBase = 'THISISTHEURL'
        self.cacheFolder = json.dumps('CACHEPATH').replace(
            '\\', '/').replace('"', '')
        self.serialKey = '00000000-0000-0000-0000-000000000000'

        self.uriLogin = self.uriBase + '/mlogin'
        self.uriSubmit = self.uriBase + '/msubmit'
        self.uriConfirm = self.uriBase + '/mconfirm'
        self.submissionAllowed = False

        self.downloadImages()
        self.buildMainLayout()

        try:
            import requests
            self.requestLoaded = True
        except:
            self.buildRequestlayout()
            self.stackedWidget.setCurrentIndex(5)

        self.buildSplashPage()
        self.buildUserInfoLayout()
        self.ProjectAndSubmissionLayout()
        self.buildPlayblastLayout()
        self.buildProjectLayout()
        self.buildsubmissionSuccessLayout()
        self.buildErrorLayout()
        self.setFramerate()

    def buildRequestlayout(self):
        requestLayout = QtWidgets.QVBoxLayout(self.missingRequestPage)

        location = sys.executable
        installRequestsCommand = 'mayapy -m pip install requests'
        endOfString = 'maya.exe' if platform.system() == 'Windows' else '/MacOS/Maya'
        replaceWith = '' if platform.system() == 'Windows' else '/bin/'
        displayStr = location.replace(endOfString, replaceWith)

        bhHeadline = QtWidgets.QLabel('Missing request module!')
        bhHeadline.setStyleSheet('font-size: 18px; padding: 4px;')
        bhInfo = QtWidgets.QLabel(
            'We utilize the python request module in order to commuicate with the Framethrower platform! Without requests, we cannot upload your beautiful work! In order to install requests follow these instructions:')
        bhInfo.setStyleSheet('padding: 4px; font-size: 11px;')
        bhInfo.setWordWrap(True)

        bhStep1 = QtWidgets.QLabel(
            '1. Open a new terminal, and go to your Maya bin directory by entering the follow command:')
        bhStep1.setWordWrap(True)
        bhStep1.setStyleSheet('padding: 8px;')
        command1 = QtWidgets.QLabel('cd {0}'.format(displayStr))
        command1.setStyleSheet(
            'background-color: #000; padding: 8px; border-radius: 4px;')
        command1.setTextInteractionFlags(QtCore.Qt.TextSelectableByMouse)

        bhStep2 = QtWidgets.QLabel(
            '2. Install requests by executing this command in the terminal:')
        bhStep2.setWordWrap(True)
        bhStep2.setStyleSheet('padding: 8px;')
        command2 = QtWidgets.QLabel(installRequestsCommand)
        command2.setStyleSheet(
            'background-color: #000; padding: 8px; border-radius: 4px;')
        command2.setTextInteractionFlags(QtCore.Qt.TextSelectableByMouse)

        requestLayout.addStretch()
        requestLayout.addWidget(bhHeadline)
        requestLayout.addWidget(bhInfo)
        requestLayout.addWidget(bhStep1)
        requestLayout.addWidget(command1)
        requestLayout.addWidget(bhStep2)
        requestLayout.addWidget(command2)
        requestLayout.addStretch()

    def downloadImages(self):

        try:
            open(path.abspath(self.cacheFolder + '/logo.png'))
        except:
            try:
                img = requests.get(
                    self.origin + '/images/logo.png')
                with open(path.abspath(self.cacheFolder + '/logo.png'), "wb") as f:
                    f.write(img.content)
            except:
                print('LOOL ', self.cacheFolder + '/logo.png')

        imagesToDownload = ['submissionFailed.png',
                            'login.png',
                            'submissionSuccess.png']

        for image in imagesToDownload:
            try:
                open(path.abspath(self.cacheFolder + '/' + image))
            except:
                try:
                    img = requests.get(
                        '{0}/maya/{1}'.format(self.origin, image))
                    with open(path.abspath(self.cacheFolder + '/' + image), "wb") as f:
                        f.write(img.content)
                except:
                    pass

    def buildProjectLayout(self):

        self.projectWidget = QtWidgets.QWidget()
        self.projectLayout = QtWidgets.QVBoxLayout(self.projectWidget)

        self.keepLastProjectFrameRangeCheckbox = QtWidgets.QCheckBox(
            'Keep Last Submissionss Frame Range')
        self.keepLastProjectFrameRangeCheckbox.setChecked(True)
        self.keepLastProjectFrameRangeCheckbox.stateChanged.connect(
            lambda: self.setKeepLastProjectFrameRange(self.keepLastProjectFrameRangeCheckbox))

        self.projectList = QtWidgets.QComboBox()
        self.projectList.currentIndexChanged.connect(self.projectChange)

        self.newProjectTitleLabel = QtWidgets.QLabel('Title:')

        self.newProjectTitle = QtWidgets.QLineEdit('')
        self.newProjectTitle.textChanged.connect(self.titleChange)

        self.framerangeStatus = QtWidgets.QLabel(
            'The Status of the frame range')
        self.framerangeStatus.setAlignment(QtCore.Qt.AlignCenter)

        self.framesWidget = QtWidgets.QWidget()
        self.framesLayout = QtWidgets.QHBoxLayout(self.framesWidget)
        self.startFrameLabel = QtWidgets.QLabel('')
        self.endFrameLabel = QtWidgets.QLabel('')
        self.currentFPSLabel = QtWidgets.QLabel(
            'Current scene is at {0}'.format(self.currentFPS))
        self.framesLayout.addWidget(self.startFrameLabel)
        self.framesLayout.addStretch()
        self.framesLayout.addWidget(self.endFrameLabel)

        self.projectLayout.addWidget(self.projectList)

        self.projectLayout.addWidget(self.newProjectTitleLabel)
        self.projectLayout.addWidget(self.newProjectTitle)

        self.projectLayout.addWidget(self.keepLastProjectFrameRangeCheckbox)
        self.projectLayout.addWidget(self.framesWidget)
        self.projectLayout.addWidget(self.framerangeStatus)
        self.projectLayout.addWidget(self.currentFPSLabel)

        self.segmentLayout['project'].addWidget(self.projectWidget)

    def buildPlayblastLayout(self):

        self.playblastButton = QtWidgets.QPushButton("Create Playblast")
        self.submitButton = QtWidgets.QPushButton("Submit")
        self.submitButton.setEnabled(False)

        self.playblastLayout.addWidget(self.playblastButton)
        self.playblastLayout.addWidget(self.submitButton)

        self.playblastButton.clicked.connect(self.playblast)
        self.submitButton.clicked.connect(self.submit)

        # self.checkProFeedback = QtWidgets.QCheckBox(
        #     'Request Professional Feedback')
        # self.checkProFeedback.setEnabled(True)
        # self.checkProFeedback.stateChanged.connect(
        #     lambda: self.setFeedbackRequest(self.checkProFeedback))
        self.comment = QtWidgets.QPlainTextEdit()
        self.comment.textChanged.connect(self.commentChange)
        self.commentWarning = QtWidgets.QLabel(
            "Comment limited to 500 characters")
        # self.segmentLayout['submission'].addWidget(self.checkProFeedback)
        self.segmentLayout['submission'].addWidget(self.comment)
        self.segmentLayout['submission'].addWidget(self.commentWarning)

    def buildErrorLayout(self):
        errorLayout = QtWidgets.QVBoxLayout(self.errorPage)
        label = QtWidgets.QLabel()
        try:
            image = QtGui.QImage(path.abspath(
                self.cacheFolder + '/submissionFailed.png'))
            label.setPixmap(QtGui.QPixmap(image))
        except:
            pass
        self.errorLabel = QtWidgets.QLabel('Woops! Something went wrong!')
        self.errorLabel.setStyleSheet('padding-top: 48px; font-size: 14px;')
        self.errorLabel.setTextFormat(QtCore.Qt.RichText)
        self.errorLabel.setOpenExternalLinks(True)
        self.errorLabel.setAlignment(QtCore.Qt.AlignCenter)
        label.setAlignment(QtCore.Qt.AlignCenter)
        errorLayout.addStretch()
        errorLayout.addWidget(label)
        errorLayout.addWidget(self.errorLabel)
        errorLayout.addStretch()

    def buildsubmissionSuccessLayout(self):
        successLayout = QtWidgets.QVBoxLayout(self.submissionSuccessPage)
        label = QtWidgets.QLabel()
        try:
            image = QtGui.QImage(path.abspath(
                self.cacheFolder + '/submissionSuccess.png'))
            label.setPixmap(QtGui.QPixmap(image))
        except:
            pass
        headlineLabel = QtWidgets.QLabel('Submission Succesful!')
        headlineLabel.setAlignment(QtCore.Qt.AlignCenter)
        self.successLabel = QtWidgets.QLabel(
            'Click here to see your animation on Framethrower')
        self.successLabel.setTextFormat(QtCore.Qt.RichText)
        self.successLabel.setStyleSheet('padding-top: 48px;')
        self.successLabel.setOpenExternalLinks(True)
        self.successLabel.setAlignment(QtCore.Qt.AlignCenter)
        label.setAlignment(QtCore.Qt.AlignCenter)
        successLayout.addStretch()
        successLayout.addWidget(label)
        successLayout.addWidget(headlineLabel)
        successLayout.addWidget(self.successLabel)
        successLayout.addStretch()

    def setFeedbackRequest(self, b):
        self.proFeedback = b.isChecked()

    def setKeepLastProjectFrameRange(self, b):
        self.keepLastProjectFrameRange = b.isChecked()
        self.setRange()

    def buildMainLayout(self):
        self.stackedWidget = QtWidgets.QStackedWidget()
        self.setCentralWidget(self.stackedWidget)

        self.splashPage = QtWidgets.QWidget()
        self.playblastPage = QtWidgets.QWidget()
        self.loadingPage = QtWidgets.QWidget()
        self.submissionSuccessPage = QtWidgets.QWidget()
        self.errorPage = QtWidgets.QWidget()
        self.missingRequestPage = QtWidgets.QWidget()

        self.stackedWidget.addWidget(self.splashPage)
        self.stackedWidget.addWidget(self.playblastPage)
        self.stackedWidget.addWidget(self.loadingPage)
        self.stackedWidget.addWidget(self.submissionSuccessPage)
        self.stackedWidget.addWidget(self.errorPage)
        self.stackedWidget.addWidget(self.missingRequestPage)

    def buildSplashPage(self):
        loginLayout = QtWidgets.QHBoxLayout(self.splashPage)

        label = QtWidgets.QLabel()
        try:
            image = QtGui.QImage(path.abspath(
                self.cacheFolder + '/login.png'))
            label.setPixmap(QtGui.QPixmap(image))
        except:
            pass
        login = QtWidgets.QVBoxLayout()
        self.loginLabel = QtWidgets.QLabel()

        self.loginButton = QtWidgets.QPushButton("Log In")
        self.loginButton.setMinimumWidth(150)
        self.errorLoginLabel = QtWidgets.QLabel('')
        self.errorLoginLabel.setTextFormat(QtCore.Qt.RichText)
        self.errorLoginLabel.setOpenExternalLinks(True)
        self.errorLoginLabel.setWordWrap(True)
        self.loginButton.clicked.connect(self.login)
        login.addStretch()
        login.addWidget(label)
        login.addWidget(self.loginButton)
        login.addWidget(self.loginLabel)
        login.addWidget(self.errorLoginLabel)
        login.addStretch()
        loginLayout.addStretch()
        loginLayout.addLayout(login)
        loginLayout.addStretch()

    def buildUserInfoLayout(self):
        self.userWidget = QtWidgets.QWidget()
        self.userLayout = QtWidgets.QVBoxLayout(self.userWidget)

        self.userHeaderWidget = QtWidgets.QWidget()
        self.UserHeaderLayout = QtWidgets.QHBoxLayout(self.userHeaderWidget)

        self.loggedInUserLabel = QtWidgets.QLabel('')
        self.UserHeaderLayout.addWidget(self.loggedInUserLabel)
        self.UserHeaderLayout.addStretch()

        label = QtWidgets.QLabel()
        try:
            image = QtGui.QImage(path.abspath(
                self.cacheFolder + '/logo.png'))
            label.setPixmap(QtGui.QPixmap(image))
        except:
            pass
        self.UserHeaderLayout.addWidget(label)
        self.loggedInUserLabel.setTextFormat(QtCore.Qt.RichText)
        self.canSubmitLabel = QtWidgets.QLabel()
        self.feedbackLabel = QtWidgets.QLabel()
        self.codecErrorLabel = QtWidgets.QLabel()
        self.codecErrorLabel.setTextFormat(QtCore.Qt.RichText)
        self.codecErrorLabel.setWordWrap(True)
        self.codecErrorLabel.setOpenExternalLinks(True)
        self.becomeMemberLabel = QtWidgets.QLabel()
        self.becomeMemberLabel.setWordWrap(True)

        self.userLayout.addWidget(self.userHeaderWidget)
        self.userLayout.addWidget(self.canSubmitLabel)
        # self.userLayout.addWidget(self.feedbackLabel)
        self.userLayout.addWidget(self.codecErrorLabel)
        self.userLayout.addWidget(self.becomeMemberLabel)

    def ProjectAndSubmissionLayout(self):
        self.playblastLayout = QtWidgets.QVBoxLayout(self.playblastPage)
        self.playblastLayout.addWidget(self.userWidget)
        self.segmentWidget = {}
        self.segmentLayout = {}
        segments = ['project', 'submission']
        for segment in segments:
            self.segmentWidget[segment] = QtWidgets.QGroupBox(
                segment.capitalize())
            self.segmentLayout[segment] = QtWidgets.QVBoxLayout()
            self.segmentWidget[segment].setLayout(self.segmentLayout[segment])
            self.playblastLayout.addWidget(self.segmentWidget[segment])

    def toggleUI(self, segment):
        self.segmentWidget[segment].setVisible(
            not self.segmentWidget[segment].isVisible())

    def login(self):
        payload = {}
        payload['serial_key'] = self.serialKey
        payload['version_string'] = self.versionString

        def hLogin():
            result = requests.post(self.uriLogin, json=payload)
            if (result.status_code == 200):
                response = json.loads(result.text)
                self.projects = response['projects']
                self.username = response['user']['username']
                self.amaxf = response['user']['max_frames']
                self.token = response['token']
                # if(response['user']['premium_type'] == 'default'):
                #     self.becomeMemberLabel.setText(
                #         'If you want proffessional video feedback then consider becoming a Pro member!')
                self.submissionAllowed = response['user']['can_submit']
                self.playblastButton.setEnabled(self.submissionAllowed)
                self.feedbackAmounts = response['user']['built_in_feedback']
                self.feedbackLabel.setText(
                    'You have {0} feedback{1} left'.format(self.feedbackAmounts, 's' if self.feedbackAmounts > 1 else ''))
                if not (response['user']['can_submit']):
                    self.feedbackLabel.setText(
                        'Unfortunately, you can only post  within a 24 hour window')
                self.comment.setEnabled(self.submissionAllowed)
                # self.checkProFeedback.setEnabled(
                #     self.submissionAllowed and self.feedbackAmounts > 0)
                if (self.submissionAllowed):
                    self.comment.setPlaceholderText(
                        "Submission comment...")
                else:
                    self.comment.setPlaceholderText(
                        "You are currently unable to post")
                self.sjFramerate = cmds.scriptJob(
                    e=["timeUnitChanged", self.setFramerate], protected=True)
                self.sjAnimRange = cmds.scriptJob(
                    e=["playbackRangeChanged", self.setRange], protected=True)
                for project in self.projects:
                    item = QtGui.QStandardItem()
                    item.setData(project['title'], QtCore.Qt.DisplayRole)
                    item.setData(project['id'], QtCore.Qt.UserRole)
                    item.setCheckable(False)
                    self.model.appendRow(item)

                newProject = QtGui.QStandardItem()
                newProject.setData('Create a New Project',
                                   QtCore.Qt.DisplayRole)
                newProject.setData('NewProject', QtCore.Qt.UserRole)
                newProject.setCheckable(False)
                self.model.appendRow(newProject)
                self.projectList.setModel(self.model)
                defaultGreeting = '<span style="font-size: 21px; color: white;">Hi {0}</span>'.format(
                    self.username)
                proGreeting = '<span style="font-size: 21px; color: white;">Hi {0} - </span><span style="color: #63b3ed; font-size: 21px">PRO</span>'.format(
                    self.username)
                if (response['user']['premium_type'] == 'default'):
                    self.loggedInUserLabel.setText(defaultGreeting)
                else:
                    self.loggedInUserLabel.setText(proGreeting)
                self.stackedWidget.setCurrentIndex(1)
            elif (result.status_code == 403):
                self.loginButton.setEnabled(False)
                self.errorLoginLabel.setText(
                    'There is a newer version of the plugin available. Download the latest version from <a href="{0}/settings/plugin" style="color: white;">Framethrower</a>'.format(self.origin))
            else:
                self.errorLoginLabel.setText('Invalid Maya Environment ID')
        hLogin()

    def logout(self):
        self.token = ''
        self.stackedWidget.setCurrentIndex(0)

    def submit(self):
        data = {}
        data['title'] = self.title
        data['endFrame'] = self.endFrame
        data['startFrame'] = self.startFrame
        data['proFeedback'] = False
        data['newProject'] = self.newProject
        data['comment'] = self.submission_comment
        data['animationId'] = self.animationId
        headers = {}
        headers['token'] = self.token

        def hSubmit():
            submit = requests.get(self.uriSubmit, headers=headers)
            if (submit.status_code == 200):
                submitRes = json.loads(submit.text)
                uploadHeaders = {"Content-Type": "video/quicktime"}
                submission = open(self.output, 'rb').read()
                response = requests.put(
                    submitRes['url'], data=submission, headers=uploadHeaders)
                if (response.status_code == 200):
                    response = json.loads(submit.text)
                    data['uploadId'] = response['uploadId']
                    headers['Content-type'] = 'application/json'
                    headers['Accept'] = 'text/plain'
                    confirm = requests.post(
                        self.uriConfirm, headers=headers, json=data)
                    if (confirm.status_code == 200):
                        confirmRes = json.loads(confirm.text)
                        self.successLabel.setText('<a style="color: white;" href="{0}/animation/{1}/{2}">Click here to see your animation on Framethrower</a>'.format(self.origin,
                                                                                                                                                                      confirmRes['animationId'], confirmRes['submissionId']))
                        self.stackedWidget.setCurrentIndex(3)
                    else:
                        self.stackedWidget.setCurrentIndex(4)
                else:
                    self.stackedWidget.setCurrentIndex(4)
            else:
                self.stackedWidget.setCurrentIndex(4)

        hSubmit()

    def playblast(self):

        aPlayBackSliderPython = mel.eval('$tmpVar=$gPlayBackSlider')
        audiosource = cmds.timeControl(
            aPlayBackSliderPython, query=True, s=True)
        timelineOccupied = cmds.timeControl(
            aPlayBackSliderPython, query=True, ds=True)
        useTraxEditor = False

        if audiosource == '' and timelineOccupied == True:
            useTraxEditor = True

        today = date.today()
        dateStamp = today.strftime("%y%m%d")
        try:
            self.output = cmds.playblast(format=self.codec, startTime=self.startFrame, endTime=self.endFrame, width=1280, height=720, uts=useTraxEditor,
                                         sequenceTime=0, clearCache=1, sound=audiosource,
                                         viewer=1, showOrnaments=1, fp=4, offScreen=True, percent=100,  compression="H.264", quality=70, filename=(path.join(self.cacheFolder, 'plb_{0}_{1}.mov'.format(dateStamp,  str(uuid.uuid4())[:8]))))
        except:
            self.playblastButton.setEnabled(False)
            self.codecErrorLabel.setStyleSheet(
                'background-color: #c53030; padding: 12px; color: white; border-radius: 4px;')
            self.codecErrorLabel.setText(
                'Playblast Failed! This is likely caused by missing codecs. Check out the <a style="color: white; font-weight: 600;" href="{0}/gettingstarted">Getting Started</a> section for more details! <div style="font-size: 9px; color: rgba(255, 255, 255, 0.7);">* You will need to restart Maya after installing the codecs!</div>'.format(self.origin))

        self.setUISubmit()

    def allowSubmission(self):
        print('testing...')

    def projectChange(self):
        if (self.projectList.currentData(role=QtCore.Qt.UserRole) == 'NewProject'):
            self.keepLastProjectFrameRangeCheckbox.setVisible(False)
            self.newProjectTitleLabel.setVisible(True)
            self.newProjectTitle.setVisible(True)
            self.newProject = True
            self.title = self.newProjectTitle.text()
        else:
            for project in self.projects:
                if (self.projectList.currentData(role=QtCore.Qt.UserRole) == project['id']):
                    # if (self.submissionAllowed and not project['pending_feedback']):
                    #     self.checkProFeedback.setChecked(self.proFeedback)
                    # else:
                    #     self.checkProFeedback.setEnabled(False)
                    #     self.checkProFeedback.setChecked(False)
                    self.title = project['title']
                    self.animationId = project['id']
            self.keepLastProjectFrameRangeCheckbox.setVisible(True)
            self.newProjectTitleLabel.setVisible(False)
            self.newProjectTitle.setVisible(False)
            self.newProject = False
        self.setRange()

    def setFramerate(self):
        self.currentFPS = cmds.currentUnit(query=True, time=True)

        fps_name = {
            "game": "15",
            "film": "24",
            "pal": "25",
            "ntsc": "30",
            "show": "48",
            "palf": "50",
            "ntscf": "60"
        }

        formated_fps = ''
        if 'fps' in self.currentFPS:
            formated_fps = '{0} fps'.format(self.currentFPS.split('fps')[0])
        else:
            formated_fps = '{0} fps'.format(fps_name[self.currentFPS])

        self.currentFPSLabel.setText(
            'Current scene is at {0}'.format(formated_fps))

    def setRange(self):
        if(self.keepLastProjectFrameRange and not self.newProject):
            self.framerangeStatus.setText('')
            self.framerangeStatus.setStyleSheet('background-color: none;')
            for project in self.projects:
                if (self.projectList.currentData(role=QtCore.Qt.UserRole) == project['id']):
                    self.startFrame = project['start_frame']
                    self.endFrame = project['end_frame']
                    self.startFrameLabel.setText(
                        'Start Frame: {0}'.format(self.startFrame))
                    self.endFrameLabel.setText(
                        'End Frame: {0}'.format(self.endFrame))
        else:
            self.minTime = int(cmds.playbackOptions(q=True, minTime=True))
            self.maxTime = int(cmds.playbackOptions(q=True, maxTime=True))
            self.endFrame = self.maxTime
            self.startFrame = self.minTime
            amountOfFrames = (self.maxTime - self.minTime + 1)
            if (amountOfFrames > self.amaxf):
                self.playblastButton.setEnabled(False)
                self.framerangeStatus.setText('Frame Range is too long!')
                self.framerangeStatus.setStyleSheet(
                    "background-color: #664444")
            elif self.minTime < 1:
                self.playblastButton.setEnabled(False)
                self.framerangeStatus.setText(
                    'Start Frame cannot be before Frame 1')
                self.framerangeStatus.setStyleSheet(
                    "background-color: #664444")
            else:
                self.framerangeStatus.setText('Frame Range is Valid')
                self.playblastButton.setEnabled(True)
                self.framerangeStatus.setStyleSheet(
                    'background-color: #446644')
            self.startFrameLabel.setText(
                'Start Frame: {0}'.format(self.minTime))
            self.endFrameLabel.setText(
                'End Frame: {0}'.format(self.maxTime))

    def setUISubmit(self):
        if self.output is not None and self.submissionAllowed:
            self.submitButton.setEnabled(True)

    def closeEvent(self, event):
        if (self.jwt != ''):
            self.jwt = ''
        try:
            if (isinstance(self.sjAnimRange, (int, long)) == True):
                cmds.scriptJob(kill=self.sjAnimRange, force=True)
                self.sjAnimRange = 'Not set'
        except:
            pass

        try:
            if (isinstance(self.sjFramerate, (int, long)) == True):
                cmds.scriptJob(kill=self.sjFramerate, force=True)
                self.sjFramerate = 'Not set'
        except:
            pass

    def commentChange(self):
        self.submission_comment = self.comment.toPlainText()
        self.commentWarning.setText('Comment Limited to 500 Characters')

    def titleChange(self):
        self.title = self.newProjectTitle.text()
