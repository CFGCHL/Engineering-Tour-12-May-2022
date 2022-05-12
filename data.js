var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.103576467073644,
          "pitch": 0.019559990264724547,
          "rotation": 0.7853981633974483,
          "target": "2-along-engineering-drive-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00186577109999142,
          "pitch": 0,
          "rotation": 0.7853981633974483,
          "target": "0-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.000008130207254097854,
        "pitch": 0,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -0.007530287527373503,
          "pitch": -0.21859860423843358,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.00001160969274671686,
          "pitch": 0,
          "title": "Welcome",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">College of Design and Engineering</span>"
        }
      ]
    }
  ],
  "name": "Web Tour Workshop - Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
