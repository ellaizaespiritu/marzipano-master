var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-lobby",
      "name": "main lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0401828676461236,
          "pitch": -0.4714693521185058,
          "rotation": 7.0685834705770345,
          "target": "3-2f-stairs"
        },
        {
          "yaw": 2.0920342005610877,
          "pitch": 0.1457530287441351,
          "rotation": 7.853981633974483,
          "target": "2-1f-hallway"
        },
        {
          "yaw": -2.8066024302702814,
          "pitch": 0.018212383401710497,
          "rotation": 1.5707963267948966,
          "target": "1-1f-comlab"
        },
        {
          "yaw": -3.0277003334238355,
          "pitch": 0.007931961515801333,
          "rotation": 0,
          "target": "9-staff-faculty"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1f-comlab",
      "name": "1F comlab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0659409779355435,
          "pitch": 0.1623611120510411,
          "rotation": 3.141592653589793,
          "target": "0-main-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1f-hallway",
      "name": "1F hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.599781995860159,
          "pitch": -0.07600761205902096,
          "rotation": 4.71238898038469,
          "target": "4-cr-stairs"
        },
        {
          "yaw": -0.3233427931028938,
          "pitch": 0.08273720010151564,
          "rotation": 0,
          "target": "7-room-103"
        },
        {
          "yaw": -0.023561097378347995,
          "pitch": 0.05589404619989935,
          "rotation": 4.71238898038469,
          "target": "0-main-lobby"
        },
        {
          "yaw": -0.09357396385941108,
          "pitch": -0.03685695458231919,
          "rotation": 0,
          "target": "6-room-101"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2f-stairs",
      "name": "2F stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.006316915557759373,
          "pitch": 0.563751153726205,
          "rotation": 4.71238898038469,
          "target": "0-main-lobby"
        },
        {
          "yaw": -0.6124519335891634,
          "pitch": -0.055393678424144,
          "rotation": 0,
          "target": "8-room-201"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cr-stairs",
      "name": "cr stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.076900583659036,
          "pitch": -0.4459557092169675,
          "rotation": 0,
          "target": "5-pe-area"
        },
        {
          "yaw": 0.49290695195663936,
          "pitch": 0.6389142936038059,
          "rotation": 1.5707963267948966,
          "target": "2-1f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pe-area",
      "name": "pe area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3196154465520529,
          "pitch": 0.12051851363758637,
          "rotation": 3.9269908169872414,
          "target": "4-cr-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-101",
      "name": "room 101",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.36853871365608626,
          "pitch": -0.01663941340370556,
          "rotation": 0,
          "target": "2-1f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-room-103",
      "name": "room 103",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2752212195954176,
          "pitch": -0.023305867418965676,
          "rotation": 0,
          "target": "2-1f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-room-201",
      "name": "room 201",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11147137604230828,
          "pitch": 0.00585474165680111,
          "rotation": 0,
          "target": "3-2f-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-staff-faculty",
      "name": "staff faculty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.600531403217719,
          "pitch": -0.12586655681925407,
          "rotation": 1.5707963267948966,
          "target": "0-main-lobby"
        },
        {
          "yaw": 0.23711553959855358,
          "pitch": 0.6156310641747762,
          "rotation": 0,
          "target": "2-1f-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
