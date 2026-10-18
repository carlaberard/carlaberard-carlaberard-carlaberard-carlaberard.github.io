window.PORTFOLIO_PROJECTS = [
  {
    "id": "age-estimation",
    "title": "Age Estimation from Face & Voice",
    "short": "Comparing scratch CNNs with transfer learning for age regression from facial images and speech recordings.",
    "category": "AI & Machine Learning",
    "year": "2026",
    "repo": "deep-learning-age-estimation-face-voice",
    "tech": [
      "Python",
      "TensorFlow",
      "EfficientNetV2",
      "YAMNet"
    ],
    "theme": "ai",
    "shape": "neural",
    "featured": true,
    "metric": "6.63 yr",
    "metricLabel": "Face MAE · EfficientNetV2 (test)",
    "summary": "A controlled comparison of two deep learning strategies for predicting age from images and voice recordings. Face and audio branches were evaluated independently because the recordings were not paired to the same individuals.",
    "details": [
      "Built separate face and voice regression pipelines using UTKFace images and speech recordings.",
      "Compared residual CNNs and spectrogram CNNs trained from scratch against pretrained EfficientNetV2B0 and YAMNet/BiGRU approaches.",
      "Used train/validation/test splits, age-bin analysis, regression metrics and model checkpointing to study generalization."
    ],
    "outcome": "Best reported face test MAE: 6.63 years (EfficientNetV2B0). Best reported audio test MAE: 5.93 years (scratch CNN). Results come from different datasets and are not a paired multimodal benchmark.",
    "note": "Academic machine-learning experiment, not a clinical age-estimation system."
  },
  {
    "id": "voice-pathology",
    "title": "Voice Pathology Classification",
    "short": "Machine learning on electroglottography and neck-surface recordings to classify voice disorders.",
    "category": "AI & Machine Learning",
    "year": "2025",
    "repo": "voice-pathology-detection-machine-learning",
    "tech": [
      "Python",
      "Scikit-learn",
      "Librosa",
      "Feature Fusion"
    ],
    "theme": "signal",
    "shape": "voice",
    "featured": true,
    "metric": "50.4%",
    "metricLabel": "EGG + NSP fusion · reported accuracy",
    "summary": "An exploratory biomedical signal-processing pipeline for classifying healthy voices and three vocal disorders using EGG and NSP signals.",
    "details": [
      "Extracted acoustic and spectral features, including MFCC, RMS, ZCR and spectral descriptors.",
      "Compared logistic regression, decision trees, random forest and gradient boosting with patient-wise evaluation and feature selection.",
      "Investigated both feature-level and score-level fusion and prototyped a microphone-based classification workflow."
    ],
    "outcome": "Best reported four-class accuracy: 50.4% with Random Forest using combined EGG and NSP features. The result indicates potential complementarity between signal types, but is not clinically sufficient.",
    "note": "Exploratory academic results; not appropriate for medical diagnosis."
  },
  {
    "id": "telecare",
    "title": "IoT Telecare & Wearable Monitoring",
    "short": "Bangle.js sensors, BLE, Arduino, cloud dashboards and automatic SMS alerts in one telecare prototype.",
    "category": "Connected Devices",
    "year": "2025",
    "repo": "iot-telecare-health-monitoring",
    "tech": [
      "Arduino C++",
      "JavaScript",
      "BLE",
      "ThingSpeak"
    ],
    "theme": "iot",
    "shape": "telecare",
    "featured": true,
    "metric": "3",
    "metricLabel": "Wireless communication systems",
    "summary": "A connected-health prototype combining a Bangle.js smartwatch, Arduino UNO R4 WiFi and SIM900 module for remote monitoring and threshold-triggered notifications.",
    "details": [
      "Acquired heart rate, steps, GPS and compass measurements with JavaScript on the smartwatch.",
      "Sent measurements over Bluetooth Low Energy to Arduino, then over Wi-Fi to ThingSpeak for visualization.",
      "Implemented SMS notifications through a GSM module when programmed thresholds were exceeded."
    ],
    "outcome": "The coursework report documents successful data transmission, cloud visualization and SMS delivery during testing.",
    "note": "Prototype only. Thresholds are not validated clinical alarm criteria. Never commit credentials or personal phone numbers."
  },
  {
    "id": "mri-restoration",
    "title": "Brain MRI Denoising",
    "short": "Noise reduction and anatomical detail preservation using five classical image-restoration techniques.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-image-restoration",
    "tech": [
      "Python",
      "OpenCV",
      "Scikit-image",
      "NIfTI"
    ],
    "theme": "imaging",
    "shape": "brain",
    "featured": false,
    "metric": "5",
    "metricLabel": "Denoising filters compared",
    "summary": "An analysis of how filtering methods affect noise, contrast and anatomical sharpness in a noisy 3D brain MRI volume.",
    "details": [
      "Loaded 3D NIfTI scans and visualized axial, sagittal and coronal planes.",
      "Implemented averaging, Gaussian, median, bilateral and non-local means filtering.",
      "Compared kernel sizes and parameters using side-by-side visualizations and difference images."
    ],
    "outcome": "For the supplied MRI sample, the report favored bilateral filtering for balancing noise reduction and visible edge preservation.",
    "note": "Qualitative comparison without a clean ground-truth MRI; no diagnostic performance claim."
  },
  {
    "id": "mri-segmentation",
    "title": "2D vs 3D Brain MRI Segmentation",
    "short": "Sobel, Otsu and K-means applied slice-by-slice and across full MRI volumes.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-2d-3d-segmentation",
    "tech": [
      "Python",
      "Sobel",
      "Otsu",
      "K-means"
    ],
    "theme": "imaging",
    "shape": "segments",
    "featured": false,
    "metric": "6",
    "metricLabel": "2D and 3D processing variants",
    "summary": "A comparison of 2D and 3D approaches to intensity-based MRI segmentation and edge detection, storing all outputs in NIfTI format.",
    "details": [
      "Implemented Sobel magnitude computation in 2D and across all three spatial axes.",
      "Applied multilevel Otsu thresholding and K-means clustering to slices and full MRI volumes.",
      "Used 3D Slicer views to compare continuity and visual consistency across adjacent slices."
    ],
    "outcome": "The lab report describes more consistent across-slice appearance in 3D processing, with trade-offs in the flexibility of slice-specific methods.",
    "note": "Output classes are intensity groups, not verified anatomical tissue labels."
  },
  {
    "id": "mri-registration-2d",
    "title": "2D MRI Image Registration",
    "short": "Affine versus diffeomorphic registration for aligning individual brain MRI slices.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-affine-deformable-registration",
    "tech": [
      "Python",
      "DIPY",
      "Affine",
      "Deformable"
    ],
    "theme": "imaging",
    "shape": "registration",
    "featured": false,
    "metric": "2",
    "metricLabel": "Registration strategies",
    "summary": "An investigation into global and local image alignment, using affine transforms and symmetric diffeomorphic registration on 2D brain MRI slices.",
    "details": [
      "Prepared reference and moving MRI slices and generated affine alignment outputs.",
      "Compared global transform parameters with local deformable registration.",
      "Visualized registered images and deformation fields for selected subjects."
    ],
    "outcome": "Deformable registration provided finer local matching in the qualitative report, alongside the risk of non-physiological distortion.",
    "note": "Work is presented as a methodological learning exercise, not a verified clinical image registration system."
  },
  {
    "id": "mri-registration-3d",
    "title": "3D Brain MRI Registration",
    "short": "Volumetric alignment of segmented and non-segmented brain MRIs using affine and deformable methods.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-3d-registration",
    "tech": [
      "Python",
      "DIPY",
      "3D MRI",
      "Dice Score"
    ],
    "theme": "imaging",
    "shape": "volume",
    "featured": false,
    "metric": "0.984",
    "metricLabel": "Reported segmented deformable Dice",
    "summary": "A volumetric registration study examining how affine and deformable transforms align brain MRI volumes, with comparisons on segmented and non-segmented inputs.",
    "details": [
      "Implemented 3D registration experiments and visualized anatomical planes and deformation fields.",
      "Evaluated affine and deformable outputs using reported Dice overlap and mean-squared error.",
      "Compared visual anatomical matching, especially around ventricular structures."
    ],
    "outcome": "The original report gave a Dice coefficient of approximately 0.984 for segmented deformable registration, while affine performed better on a separate error metric.",
    "note": "These are original reported metrics; corrected publishing code has not been fully rerun."
  },
  {
    "id": "xray-classical",
    "title": "Chest X-ray Classification · Classical ML",
    "short": "HOG features with SVM, KNN and Random Forest for three-class chest radiograph classification.",
    "category": "AI & Machine Learning",
    "year": "2024",
    "repo": "chest-xray-classification-machine-learning",
    "tech": [
      "Python",
      "HOG",
      "SVM",
      "KNN"
    ],
    "theme": "ai",
    "shape": "xray",
    "featured": false,
    "metric": "80.3%",
    "metricLabel": "Reported test accuracy · SVM/KNN",
    "summary": "A medical-imaging machine-learning exercise comparing conventional classifiers on feature vectors extracted from chest radiographs.",
    "details": [
      "Preprocessed a dataset of COVID-19, Normal and Viral Pneumonia X-rays.",
      "Extracted Histogram of Oriented Gradients (HOG) descriptors.",
      "Evaluated SVM, KNN and Random Forest models with accuracy and confusion matrices."
    ],
    "outcome": "SVM and KNN each achieved a reported 80.30% accuracy on a 66-image test set.",
    "note": "Small academic dataset. Performance does not support clinical diagnostic use."
  },
  {
    "id": "xray-deep",
    "title": "Chest X-ray Classification · Deep Learning",
    "short": "Scratch CNNs, data augmentation and ResNet-18 transfer learning in PyTorch.",
    "category": "AI & Machine Learning",
    "year": "2024",
    "repo": "chest-xray-cnn-transfer-learning",
    "tech": [
      "PyTorch",
      "ResNet-18",
      "CNN",
      "Transfer Learning"
    ],
    "theme": "ai",
    "shape": "cnn",
    "featured": false,
    "metric": "98.5%",
    "metricLabel": "Reported ResNet-18 accuracy · caveat",
    "summary": "A comparison of convolutional neural networks for three-category chest X-ray classification, advancing the earlier HOG-based project.",
    "details": [
      "Trained an initial CNN, an augmented CNN and a ResNet-18 transfer-learning model.",
      "Compared model predictions and confusion matrices on the provided train/test split.",
      "Audited data provenance and identified exact train/test duplicate images."
    ],
    "outcome": "ResNet-18 achieved a reported 98.48% accuracy, but six exact image duplicates were found between the original training and test folders; an independent holdout reevaluation is required.",
    "note": "Reported accuracy may be inflated by data leakage. The result is not clinical validation."
  },
  {
    "id": "robot-pick",
    "title": "UR3e Seven-Segment Robotic Assembly",
    "short": "URScript-controlled gripper movements to arrange blocks into user-selected digits.",
    "category": "Robotics & Control",
    "year": "2025",
    "repo": "ur3e-robotic-pick-and-place",
    "tech": [
      "URScript",
      "UR3e",
      "RG2 Gripper",
      "Motion Control"
    ],
    "theme": "robotics",
    "shape": "robot",
    "featured": false,
    "metric": "0–9",
    "metricLabel": "Selectable digit assembly",
    "summary": "An interactive pick-and-place task in which the UR3e arranges rectangular wooden blocks into seven-segment digits based on user input.",
    "details": [
      "Defined placement poses for the seven possible segment locations.",
      "Mapped digits to lists of target segments, validated user input, and generated conditional pick-and-place motions.",
      "Used joint and Cartesian motion commands and RG2 gripper calls to manipulate blocks."
    ],
    "outcome": "Robot-side URScript implements all ten digit layouts. This publication copy was not revalidated on physical hardware.",
    "note": "Hard-coded robot poses require calibration, supervision and safety checks before any real execution."
  },
  {
    "id": "robot-force",
    "title": "UR3e Force-Feedback Manipulation",
    "short": "Contact-aware block detection and tower placement using wrist force sensing and URScript threads.",
    "category": "Robotics & Control",
    "year": "2025",
    "repo": "ur3e-force-feedback-manipulation",
    "tech": [
      "URScript",
      "Force/Torque",
      "Threads",
      "Contact Detection"
    ],
    "theme": "robotics",
    "shape": "force",
    "featured": true,
    "metric": "5 N",
    "metricLabel": "Programmed vertical force threshold",
    "summary": "A force-based robotic manipulation exercise that combines concurrent motion and sensing to locate blocks and place them on an unknown-height surface.",
    "details": [
      "Used the UR3e internal force/torque sensor for contact detection.",
      "Monitored force while a separate motion thread executes controlled descent.",
      "Programmed block pickup, tower placement, fallback messages and return-to-home behavior."
    ],
    "outcome": "The original code implements force-threshold contact logic for robotic manipulation. It was not independently tested in simulation or on hardware for this website.",
    "note": "A URScript source example, not a safety-certified controller; do not run unchanged on a real robot."
  },
  {
    "id": "robot-collab",
    "title": "UR3 + UR3e Collaborative Robotics",
    "short": "Two coordinated robotic arms exchanging TCP/IP messages to synchronize a shared task.",
    "category": "Robotics & Control",
    "year": "2025",
    "repo": "ur3-ur3e-collaborative-robotics",
    "tech": [
      "URScript",
      "TCP/IP",
      "Sockets",
      "Multi-Robot Systems"
    ],
    "theme": "robotics",
    "shape": "collab",
    "featured": true,
    "metric": "2",
    "metricLabel": "Coordinated robot programs",
    "summary": "A multi-robot programming exercise coordinating a UR3 and UR3e using socket messages relayed by a PC-based intermediary.",
    "details": [
      "Programmed the UR3e to grasp and transport a block using RG2 gripper control.",
      "Programmed the UR3 to perform a tool-rotation action after receiving placement confirmation.",
      "Synchronized both robot scripts with TCP socket events, timeouts and ordered messages."
    ],
    "outcome": "The report documents the task coordination and workflow. The supplied materials include the two robot-side scripts but not the external PC relay source.",
    "note": "The UR3 operation simulates secondary manipulation; both robots act as socket clients to a PC message relay."
  }
];
