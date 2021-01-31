/* eslint-disable */
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'https://4xjevcx9zfmrwlp.us.qlikcloud.com', //Tenant URL
    webIntegrationId: 'neAASL2XGeP4o2E5nJF5B_h1hWkSBnHe', // qlik-web-intergration-id
    appId: '283aab41-425b-4dd9-a4c8-d0602b037df4', // app GUID
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  // Visualizing Data! - Render from App
  n.render({
    element: document.querySelector('.object'),
    id: 'EAjjuyE', // Right click on Sheet > Developer // Grab Object ID
  });

  // Rendering without creating visualization in the app:
  n.render({
    element: document.querySelector('.object'),
    type: 'linechart',
    fields: ['title', '=avg(rating)'],
    properties: {
      showTitles: true,
      title: 'Line Chart - Avg Rating',
      subtitle: 'Visualizing Movie Data using a Line Chart 📉',
    },
  });
    
  // Cool! Trying different chart types (add type to configure.js)
  n.render({
    element: document.querySelector('.object'),
    type: 'piechart',
    fields: ['title', '=(revenue)'],
    properties: {
      showTitles: true,
      title: 'Pie Chart - Revenue',
      subtitle: 'Visualizing Movie Data using a Pie Chart ⭕',
    },
  });

  n.render({
    element: document.querySelector('.object'),
    type: 'barchart',
    fields: ['title', '=(runtime)'],
    properties: {
      showTitles: true,
      title: 'Bar Chart - Run Time',
      subtitle: 'Visualizing Movie Data using a Bar Chart 📊',
    },
  });

}

run();




// ************* For reference >> Properties of bar chart (EAjjuyE) ************
// {
//   "qInfo": {
//     "qId": "EAjjuyE",
//     "qType": "barchart"
//   },
//   "qExtendsId": "",
//   "qMetaDef": {},
//   "qStateName": "",
//   "qHyperCubeDef": {
//     "qStateName": "",
//     "qDimensions": [
//       {
//         "qLibraryId": "",
//         "qDef": {
//           "qGrouping": "N",
//           "qFieldDefs": [
//             "title"
//           ],
//           "qFieldLabels": [
//             ""
//           ],
//           "qSortCriterias": [
//             {
//               "qSortByState": 0,
//               "qSortByFrequency": 0,
//               "qSortByNumeric": 1,
//               "qSortByAscii": 1,
//               "qSortByLoadOrder": 1,
//               "qSortByExpression": 0,
//               "qExpression": {
//                 "qv": ""
//               },
//               "qSortByGreyness": 0
//             }
//           ],
//           "qNumberPresentations": [],
//           "qReverseSort": false,
//           "qActiveField": 0,
//           "qLabelExpression": "",
//           "autoSort": true,
//           "cId": "kzjQ",
//           "othersLabel": "Others"
//         },
//         "qNullSuppression": false,
//         "qIncludeElemValue": false,
//         "qOtherTotalSpec": {
//           "qOtherMode": "OTHER_COUNTED",
//           "qOtherCounted": {
//             "qv": "20"
//           },
//           "qOtherLimit": {
//             "qv": "0"
//           },
//           "qOtherLimitMode": "OTHER_GE_LIMIT",
//           "qSuppressOther": true,
//           "qForceBadValueKeeping": true,
//           "qApplyEvenWhenPossiblyWrongResult": true,
//           "qGlobalOtherGrouping": false,
//           "qOtherCollapseInnerDimensions": false,
//           "qOtherSortMode": "OTHER_SORT_DESCENDING",
//           "qTotalMode": "TOTAL_OFF",
//           "qReferencedExpression": {
//             "qv": ""
//           }
//         },
//         "qShowTotal": false,
//         "qShowAll": false,
//         "qOtherLabel": {
//           "qv": "Others"
//         },
//         "qTotalLabel": {
//           "qv": ""
//         },
//         "qCalcCond": {
//           "qv": ""
//         },
//         "qAttributeExpressions": [],
//         "qAttributeDimensions": [],
//         "qCalcCondition": {
//           "qCond": {
//             "qv": ""
//           },
//           "qMsg": {
//             "qv": ""
//           }
//         }
//       }
//     ],
//     "qMeasures": [
//       {
//         "qLibraryId": "",
//         "qDef": {
//           "qLabel": "",
//           "qDescription": "",
//           "qTags": [],
//           "qGrouping": "N",
//           "qDef": "Sum(revenue)",
//           "qNumFormat": {
//             "qType": "M",
//             "qnDec": 2,
//             "qUseThou": 0,
//             "qFmt": "$###,##0;-$###,##0",
//             "qDec": ".",
//             "qThou": ","
//           },
//           "qRelative": false,
//           "qBrutalSum": false,
//           "qAggrFunc": "",
//           "qAccumulate": 0,
//           "qReverseSort": false,
//           "qActiveExpression": 0,
//           "qExpressions": [],
//           "qLabelExpression": "",
//           "autoSort": true,
//           "cId": "qPDP",
//           "numFormatFromTemplate": true,
//           "isCustomFormatted": false
//         },
//         "qSortBy": {
//           "qSortByState": 0,
//           "qSortByFrequency": 0,
//           "qSortByNumeric": -1,
//           "qSortByAscii": 0,
//           "qSortByLoadOrder": 1,
//           "qSortByExpression": 0,
//           "qExpression": {
//             "qv": ""
//           },
//           "qSortByGreyness": 0
//         },
//         "qAttributeExpressions": [],
//         "qAttributeDimensions": [],
//         "qCalcCond": {
//           "qv": ""
//         },
//         "qCalcCondition": {
//           "qCond": {
//             "qv": ""
//           },
//           "qMsg": {
//             "qv": ""
//           }
//         },
//         "qTrendLines": [],
//         "qMiniChartDef": {
//           "qDef": "",
//           "qLibraryId": "",
//           "qSortBy": {
//             "qSortByState": 0,
//             "qSortByFrequency": 0,
//             "qSortByNumeric": 0,
//             "qSortByAscii": 0,
//             "qSortByLoadOrder": 0,
//             "qSortByExpression": 0,
//             "qExpression": {
//               "qv": ""
//             },
//             "qSortByGreyness": 0
//           },
//           "qOtherTotalSpec": {
//             "qOtherMode": "OTHER_OFF",
//             "qOtherCounted": {
//               "qv": ""
//             },
//             "qOtherLimit": {
//               "qv": ""
//             },
//             "qOtherLimitMode": "OTHER_GT_LIMIT",
//             "qSuppressOther": false,
//             "qForceBadValueKeeping": true,
//             "qApplyEvenWhenPossiblyWrongResult": true,
//             "qGlobalOtherGrouping": false,
//             "qOtherCollapseInnerDimensions": false,
//             "qOtherSortMode": "OTHER_SORT_DESCENDING",
//             "qTotalMode": "TOTAL_OFF",
//             "qReferencedExpression": {
//               "qv": ""
//             }
//           },
//           "qMaxNumberPoints": -1,
//           "qAttributeExpressions": [],
//           "qNullSuppression": false
//         }
//       }
//     ],
//     "qInterColumnSortOrder": [
//       1,
//       0
//     ],
//     "qSuppressZero": false,
//     "qSuppressMissing": true,
//     "qInitialDataFetch": [
//       {
//         "qLeft": 0,
//         "qTop": 0,
//         "qWidth": 17,
//         "qHeight": 500
//       }
//     ],
//     "qReductionMode": "N",
//     "qMode": "S",
//     "qPseudoDimPos": -1,
//     "qNoOfLeftDims": -1,
//     "qAlwaysFullyExpanded": false,
//     "qMaxStackedCells": 5000,
//     "qPopulateMissing": false,
//     "qShowTotalsAbove": false,
//     "qIndentMode": false,
//     "qCalcCond": {
//       "qv": ""
//     },
//     "qSortbyYValue": 0,
//     "qTitle": {
//       "qv": ""
//     },
//     "qCalcCondition": {
//       "qCond": {
//         "qv": ""
//       },
//       "qMsg": {
//         "qv": ""
//       }
//     },
//     "qColumnOrder": [],
//     "qExpansionState": [],
//     "qLayoutExclude": {
//       "qHyperCubeDef": {
//         "qStateName": "",
//         "qDimensions": [],
//         "qMeasures": [],
//         "qInterColumnSortOrder": [],
//         "qSuppressZero": false,
//         "qSuppressMissing": false,
//         "qInitialDataFetch": [],
//         "qReductionMode": "N",
//         "qMode": "S",
//         "qPseudoDimPos": -1,
//         "qNoOfLeftDims": -1,
//         "qAlwaysFullyExpanded": false,
//         "qMaxStackedCells": 5000,
//         "qPopulateMissing": false,
//         "qShowTotalsAbove": false,
//         "qIndentMode": false,
//         "qCalcCond": {
//           "qv": ""
//         },
//         "qSortbyYValue": 0,
//         "qTitle": {
//           "qv": ""
//         },
//         "qCalcCondition": {
//           "qCond": {
//             "qv": ""
//           },
//           "qMsg": {
//             "qv": ""
//           }
//         },
//         "qColumnOrder": [],
//         "qExpansionState": []
//       }
//     }
//   },
//   "refLine": {
//     "refLines": []
//   },
//   "showTitles": true,
//   "title": "Top grossing movies of all time",
//   "subtitle": "",
//   "footnote": "",
//   "showDetails": false,
//   "components": [],
//   "barGrouping": {
//     "grouping": "grouped"
//   },
//   "orientation": "horizontal",
//   "scrollbar": "miniChart",
//   "scrollStartPos": 0,
//   "gridLine": {
//     "auto": false,
//     "spacing": 0
//   },
//   "dataPoint": {
//     "showLabels": true,
//     "showSegmentLabels": false,
//     "showTotalLabels": true
//   },
//   "color": {
//     "auto": true,
//     "mode": "primary",
//     "useBaseColors": "off",
//     "paletteColor": {
//       "index": 6
//     },
//     "useDimColVal": true,
//     "useMeasureGradient": true,
//     "persistent": false,
//     "expressionIsColor": true,
//     "expressionLabel": "",
//     "measureScheme": "sg",
//     "reverseScheme": false,
//     "dimensionScheme": "12",
//     "autoMinMax": true,
//     "measureMin": 0,
//     "measureMax": 10
//   },
//   "legend": {
//     "show": true,
//     "dock": "auto",
//     "showTitle": true
//   },
//   "dimensionAxis": {
//     "continuousAuto": true,
//     "show": "labels",
//     "label": "auto",
//     "dock": "near",
//     "axisDisplayMode": "auto",
//     "maxVisibleItems": 10
//   },
//   "preferContinuousAxis": true,
//   "measureAxis": {
//     "show": "none",
//     "dock": "near",
//     "spacing": 1,
//     "autoMinMax": true,
//     "minMax": "min",
//     "min": 0,
//     "max": 10
//   },
//   "tooltip": {
//     "auto": true,
//     "hideBasic": false,
//     "data": {
//       "qHyperCubeDef": {
//         "qStateName": "",
//         "qDimensions": [],
//         "qMeasures": [],
//         "qInterColumnSortOrder": [],
//         "qSuppressZero": false,
//         "qSuppressMissing": false,
//         "qInitialDataFetch": [],
//         "qReductionMode": "N",
//         "qMode": "S",
//         "qPseudoDimPos": -1,
//         "qNoOfLeftDims": -1,
//         "qAlwaysFullyExpanded": false,
//         "qMaxStackedCells": 5000,
//         "qPopulateMissing": false,
//         "qShowTotalsAbove": false,
//         "qIndentMode": false,
//         "qCalcCond": {
//           "qv": ""
//         },
//         "qSortbyYValue": 0,
//         "qTitle": {
//           "qv": ""
//         },
//         "qCalcCondition": {
//           "qCond": {
//             "qv": ""
//           },
//           "qMsg": {
//             "qv": ""
//           }
//         },
//         "qColumnOrder": [],
//         "qExpansionState": []
//       }
//     }
//   },
//   "visualization": "barchart",
//   "version": "1.1.0",
//   "showMiniChartForContinuousAxis": true
// }