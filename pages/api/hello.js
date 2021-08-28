import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const apiKey = process?.env?.NEXT_PUBLIC_TRACKER_API_KEY ?? ""
  const { game: userGame = "", platform: userPlatform = "", input: userInput = "" } = req.body
  //If API key is not located on the server
  if(apiKey === ""){
    return res.status(400).json({
      success: false,
      message: "API Key not present on the server, cannot fetch data correctly"
    })
  }
  //If any input is null, return status 400
  if(userGame === "" || userPlatform === "" || userInput === ""){
    return res.status(400).json({
      success: false,
      message: "Game, Platform and Input must not be null"
    })
  }
  //If provided game is not supported, return status 400
  if(userGame !== "apex" && userGame !== "overwatch"){
    return res.status(400).json({
      success: false,
      message: "API does not support provided game name"
    })
  }
  const myResult = {
    "platformInfo": {
        "platformSlug": "origin",
        "platformUserId": "ZombieKira99USA",
        "platformUserHandle": "ZombieKira99USA",
        "platformUserIdentifier": "ZombieKira99USA",
        "avatarUrl": "https://secure.download.dm.origin.com/production/avatar/prod/1/599/208x208.JPEG",
        "additionalParameters": null
    },
    "userInfo": {
        "userId": null,
        "isPremium": false,
        "isVerified": false,
        "isInfluencer": false,
        "isPartner": false,
        "countryCode": null,
        "customAvatarUrl": null,
        "customHeroUrl": null,
        "socialAccounts": [],
        "pageviews": 25,
        "isSuspicious": null
    },
    "metadata": {
        "currentSeason": 2,
        "activeLegend": "legend_7",
        "activeLegendName": "Lifeline",
        "activeLegendStats": [
            "Kills"
        ]
    },
    "segments": [
        {
            "type": "overview",
            "attributes": {},
            "metadata": {
                "name": "Lifetime"
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "level": {
                    "rank": null,
                    "percentile": 90.0,
                    "displayName": "Level",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 457.0,
                    "displayValue": "457",
                    "displayType": "Unspecified"
                },
                "kills": {
                    "rank": null,
                    "percentile": 97.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 5815.0,
                    "displayValue": "5,815",
                    "displayType": "Unspecified"
                },
                "damage": {
                    "rank": null,
                    "percentile": 88.0,
                    "displayName": "Damage",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 1070344.0,
                    "displayValue": "1,070,344",
                    "displayType": "Unspecified"
                },
                "revives": {
                    "rank": null,
                    "percentile": 77.0,
                    "displayName": "Revives",
                    "displayCategory": "Game",
                    "category": null,
                    "metadata": {},
                    "value": 127.0,
                    "displayValue": "127",
                    "displayType": "Unspecified"
                },
                "rankScore": {
                    "rank": null,
                    "percentile": null,
                    "displayName": "Rank Score",
                    "displayCategory": "Game",
                    "category": null,
                    "metadata": {
                        "iconUrl": "https://trackercdn.com/cdn/apex.tracker.gg/ranks/bronze4.png",
                        "rankName": "Bronze 4"
                    },
                    "value": 0.0,
                    "displayValue": "0",
                    "displayType": "Unspecified"
                },
                "arenaRankScore": {
                    "rank": null,
                    "percentile": null,
                    "displayName": "Arena Rank Score",
                    "displayCategory": "Game",
                    "category": null,
                    "metadata": {
                        "iconUrl": "https://trackercdn.com/cdn/apex.tracker.gg/ranks/bronze4.png",
                        "rankName": "Bronze 4"
                    },
                    "value": 0.0,
                    "displayValue": "0",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_7"
            },
            "metadata": {
                "name": "Lifeline",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/lifeline-concept-bg-small.jpg",
                "isActive": true
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": 7239,
                    "percentile": 99.1,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 4492.0,
                    "displayValue": "4,492",
                    "displayType": "Unspecified"
                },
                "damage": {
                    "rank": 8147,
                    "percentile": 94.0,
                    "displayName": "Damage",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 1070344.0,
                    "displayValue": "1,070,344",
                    "displayType": "Unspecified"
                },
                "revives": {
                    "rank": null,
                    "percentile": 56.0,
                    "displayName": "Revives",
                    "displayCategory": "Game",
                    "category": null,
                    "metadata": {},
                    "value": 127.0,
                    "displayValue": "127",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_9"
            },
            "metadata": {
                "name": "Octane",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/octane-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/octane-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/octane-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 81.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 549.0,
                    "displayValue": "549",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_10"
            },
            "metadata": {
                "name": "Wattson",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wattson-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wattson-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wattson-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 44.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 50.0,
                    "displayValue": "50",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_2"
            },
            "metadata": {
                "name": "Bangalore",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bangalore-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bangalore-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bangalore-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 75.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 207.0,
                    "displayValue": "207",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_5"
            },
            "metadata": {
                "name": "Bloodhound",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bloodhound-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bloodhound-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/bloodhound-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 56.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 81.0,
                    "displayValue": "81",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_4"
            },
            "metadata": {
                "name": "Mirage",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/mirage-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/mirage-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/mirage-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 16.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 13.0,
                    "displayValue": "13",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_1"
            },
            "metadata": {
                "name": "Wraith",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 42.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 69.0,
                    "displayValue": "69",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_6"
            },
            "metadata": {
                "name": "Gibraltar",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/gibraltar-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/gibraltar-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/gibraltar-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 63.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 69.0,
                    "displayValue": "69",
                    "displayType": "Unspecified"
                }
            }
        },
        {
            "type": "legend",
            "attributes": {
                "id": "legend_8"
            },
            "metadata": {
                "name": "Pathfinder",
                "imageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/pathfinder-tile.png",
                "tallImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/pathfinder-tall.png",
                "bgImageUrl": "https://trackercdn.com/cdn/apex.tracker.gg/legends/pathfinder-concept-bg-small.jpg",
                "isActive": false
            },
            "expiryDate": "2021-08-27T23:28:25.8831686+00:00",
            "stats": {
                "kills": {
                    "rank": null,
                    "percentile": 73.0,
                    "displayName": "Kills",
                    "displayCategory": "Combat",
                    "category": null,
                    "metadata": {},
                    "value": 285.0,
                    "displayValue": "285",
                    "displayType": "Unspecified"
                }
            }
        }
    ],
    "availableSegments": [
        {
            "type": "legend",
            "attributes": {},
            "metadata": {}
        }
    ],
    "expiryDate": "2021-08-27T23:28:25.8831686+00:00"
  }
  return res.status(200).json({
    success: true,
    result: myResult //Return data object from API
  })
  const url = `https://public-api.tracker.gg/v2/${userGame}/standard/profile/${userPlatform}/${userInput}`
  axios.get(url, {
    headers: {
      'TRN-Api-Key': apiKey
    },
  }).then((response) => {
    return res.status(200).json({
      success: true,
      result: response.data.data //Return data object from API
    })
  }).catch((error) => {
    return res.status(400).json({
      success: false,
      result: error.response.data
    })
  })
}
