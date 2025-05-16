var wms_layers = [];


        var lyr_Googleearth_0 = new ol.layer.Tile({
            'title': 'Google earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_MDE_30m_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MDE_30m<br />\
    <img src="styles/legend/MDE_30m_1_0.png" /> 116,0000<br />\
    <img src="styles/legend/MDE_30m_1_1.png" /> 121,0999<br />\
    <img src="styles/legend/MDE_30m_1_2.png" /> 122,3299<br />\
    <img src="styles/legend/MDE_30m_1_3.png" /> 123,7600<br />\
    <img src="styles/legend/MDE_30m_1_4.png" /> 139,3098<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MDE_30m_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7050549.649408, -4173263.108170, -7038647.263276, -4157933.828375]
        })
    });
var lyr_Max_Inundacin_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Max_Inundación<br />\
    <img src="styles/legend/Max_Inundacin_2_0.png" /> 0<br />\
    <img src="styles/legend/Max_Inundacin_2_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Max_Inundacin_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7049931.445955, -4172763.945836, -7039691.841721, -4158823.879444]
        })
    });
var lyr_Ocurrencia0100_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ocurrencia (0-100)<br />\
    <img src="styles/legend/Ocurrencia0100_3_0.png" /> <= 0<br />\
    <img src="styles/legend/Ocurrencia0100_3_1.png" /> 0 - 15<br />\
    <img src="styles/legend/Ocurrencia0100_3_2.png" /> 15 - 30<br />\
    <img src="styles/legend/Ocurrencia0100_3_3.png" /> 30 - 40<br />\
    <img src="styles/legend/Ocurrencia0100_3_4.png" /> > 40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ocurrencia0100_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7049910.000000, -4172757.060112, -7039680.000000, -4158837.829940]
        })
    });
var lyr_Alazanas_1_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alazanas_1<br />\
    <img src="styles/legend/Alazanas_1_4_0.png" /> 0,2663<br />\
    <img src="styles/legend/Alazanas_1_4_1.png" /> 0,7538<br />\
    <img src="styles/legend/Alazanas_1_4_2.png" /> 0,7693<br />\
    <img src="styles/legend/Alazanas_1_4_3.png" /> 0,7838<br />\
    <img src="styles/legend/Alazanas_1_4_4.png" /> 0,8164<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Alazanas_1_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7041560.000000, -4161034.445057, -7039770.000000, -4158874.436639]
        })
    });
var lyr_Alazanas_2_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alazanas_2<br />\
    <img src="styles/legend/Alazanas_2_5_0.png" /> 0,3942<br />\
    <img src="styles/legend/Alazanas_2_5_1.png" /> 0,7478<br />\
    <img src="styles/legend/Alazanas_2_5_2.png" /> 0,7585<br />\
    <img src="styles/legend/Alazanas_2_5_3.png" /> 0,7671<br />\
    <img src="styles/legend/Alazanas_2_5_4.png" /> 0,7871<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Alazanas_2_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7042840.000000, -4161083.263652, -7042030.000000, -4160155.746977]
        })
    });
var lyr_Alazanas_3_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alazanas_3<br />\
    <img src="styles/legend/Alazanas_3_6_0.png" /> 0,3856<br />\
    <img src="styles/legend/Alazanas_3_6_1.png" /> 0,6527<br />\
    <img src="styles/legend/Alazanas_3_6_2.png" /> 0,7030<br />\
    <img src="styles/legend/Alazanas_3_6_3.png" /> 0,7315<br />\
    <img src="styles/legend/Alazanas_3_6_4.png" /> 0,7747<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Alazanas_3_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7041850.000000, -4162657.778208, -7040340.000000, -4161071.058983]
        })
    });
var lyr_Alazanas_4_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alazanas_4<br />\
    <img src="styles/legend/Alazanas_4_7_0.png" /> 0,3990<br />\
    <img src="styles/legend/Alazanas_4_7_1.png" /> 0,6985<br />\
    <img src="styles/legend/Alazanas_4_7_2.png" /> 0,7106<br />\
    <img src="styles/legend/Alazanas_4_7_3.png" /> 0,7183<br />\
    <img src="styles/legend/Alazanas_4_7_4.png" /> 0,7461<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Alazanas_4_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7042790.000000, -4162633.365429, -7042260.000000, -4161119.877739]
        })
    });
var lyr_Alazanas_5_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alazanas_5<br />\
    <img src="styles/legend/Alazanas_5_8_0.png" /> 0,4769<br />\
    <img src="styles/legend/Alazanas_5_8_1.png" /> 0,8237<br />\
    <img src="styles/legend/Alazanas_5_8_2.png" /> 0,8347<br />\
    <img src="styles/legend/Alazanas_5_8_3.png" /> 0,8414<br />\
    <img src="styles/legend/Alazanas_5_8_4.png" /> 0,8542<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Alazanas_5_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7044890.000000, -4165087.117745, -7043460.000000, -4164220.307562]
        })
    });
var lyr_Alazanas_6_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alazanas_6<br />\
    <img src="styles/legend/Alazanas_6_9_0.png" /> 0,4729<br />\
    <img src="styles/legend/Alazanas_6_9_1.png" /> 0,6511<br />\
    <img src="styles/legend/Alazanas_6_9_2.png" /> 0,6683<br />\
    <img src="styles/legend/Alazanas_6_9_3.png" /> 0,6846<br />\
    <img src="styles/legend/Alazanas_6_9_4.png" /> 0,7171<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Alazanas_6_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7043960.000000, -4168371.842884, -7043180.000000, -4167248.333226]
        })
    });
var lyr_LA12_DEM_32720_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA1-2_DEM_32720<br />\
    <img src="styles/legend/LA12_DEM_32720_10_0.png" /> 122,3570<br />\
    <img src="styles/legend/LA12_DEM_32720_10_1.png" /> 123,6883<br />\
    <img src="styles/legend/LA12_DEM_32720_10_2.png" /> 124,0589<br />\
    <img src="styles/legend/LA12_DEM_32720_10_3.png" /> 124,8048<br />\
    <img src="styles/legend/LA12_DEM_32720_10_4.png" /> 125,6897<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA12_DEM_32720_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7045128.785879, -4169282.627738, -7043084.537093, -4167022.205866]
        })
    });
var lyr_EC_DEM_32720_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'EC_DEM_32720<br />\
    <img src="styles/legend/EC_DEM_32720_11_0.png" /> 123,0319<br />\
    <img src="styles/legend/EC_DEM_32720_11_1.png" /> 123,6537<br />\
    <img src="styles/legend/EC_DEM_32720_11_2.png" /> 123,9628<br />\
    <img src="styles/legend/EC_DEM_32720_11_3.png" /> 124,2122<br />\
    <img src="styles/legend/EC_DEM_32720_11_4.png" /> 125,6620<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EC_DEM_32720_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7046546.214423, -4170964.512928, -7044501.255380, -4169165.245003]
        })
    });
var lyr_LA46_DEM_32720_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA4-6_DEM_32720<br />\
    <img src="styles/legend/LA46_DEM_32720_12_0.png" /> 124,2554<br />\
    <img src="styles/legend/LA46_DEM_32720_12_1.png" /> 125,1536<br />\
    <img src="styles/legend/LA46_DEM_32720_12_2.png" /> 125,4734<br />\
    <img src="styles/legend/LA46_DEM_32720_12_3.png" /> 125,6947<br />\
    <img src="styles/legend/LA46_DEM_32720_12_4.png" /> 126,1280<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA46_DEM_32720_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7046507.468961, -4169101.380448, -7045271.567790, -4166854.254615]
        })
    });
var lyr_LA_08_10_32720_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA_08_10_32720<br />\
    <img src="styles/legend/LA_08_10_32720_13_0.png" /> 122,2658<br />\
    <img src="styles/legend/LA_08_10_32720_13_1.png" /> 123,0792<br />\
    <img src="styles/legend/LA_08_10_32720_13_2.png" /> 123,2855<br />\
    <img src="styles/legend/LA_08_10_32720_13_3.png" /> 123,4985<br />\
    <img src="styles/legend/LA_08_10_32720_13_4.png" /> 124,2683<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA_08_10_32720_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7045896.149048, -4166060.849642, -7044912.740522, -4164218.534922]
        })
    });
var lyr_LA911_DEM_32720_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA9-11_DEM_32720<br />\
    <img src="styles/legend/LA911_DEM_32720_14_0.png" /> 123,9515<br />\
    <img src="styles/legend/LA911_DEM_32720_14_1.png" /> 124,8066<br />\
    <img src="styles/legend/LA911_DEM_32720_14_2.png" /> 124,9945<br />\
    <img src="styles/legend/LA911_DEM_32720_14_3.png" /> 125,2444<br />\
    <img src="styles/legend/LA911_DEM_32720_14_4.png" /> 126,1068<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA911_DEM_32720_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7044944.840818, -4166057.808318, -7043415.416817, -4164206.704406]
        })
    });
var lyr_LA_12_32720_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA_12_32720<br />\
    <img src="styles/legend/LA_12_32720_15_0.png" /> 121,9804<br />\
    <img src="styles/legend/LA_12_32720_15_1.png" /> 122,4871<br />\
    <img src="styles/legend/LA_12_32720_15_2.png" /> 122,7006<br />\
    <img src="styles/legend/LA_12_32720_15_3.png" /> 122,9521<br />\
    <img src="styles/legend/LA_12_32720_15_4.png" /> 123,5780<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA_12_32720_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7042815.988556, -4162631.379458, -7042236.297013, -4161098.261234]
        })
    });
var lyr_LA1516_DEM_32720_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA15-16_DEM_32720<br />\
    <img src="styles/legend/LA1516_DEM_32720_16_0.png" /> 123,1358<br />\
    <img src="styles/legend/LA1516_DEM_32720_16_1.png" /> 124,4005<br />\
    <img src="styles/legend/LA1516_DEM_32720_16_2.png" /> 124,8594<br />\
    <img src="styles/legend/LA1516_DEM_32720_16_3.png" /> 125,2840<br />\
    <img src="styles/legend/LA1516_DEM_32720_16_4.png" /> 126,9920<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA1516_DEM_32720_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7041895.830329, -4162674.780277, -7039707.798845, -4161016.239109]
        })
    });
var lyr_LA_17_32720_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LA_17_32720<br />\
    <img src="styles/legend/LA_17_32720_17_0.png" /> 121,4601<br />\
    <img src="styles/legend/LA_17_32720_17_1.png" /> 122,9368<br />\
    <img src="styles/legend/LA_17_32720_17_2.png" /> 123,2581<br />\
    <img src="styles/legend/LA_17_32720_17_3.png" /> 123,6168<br />\
    <img src="styles/legend/LA_17_32720_17_4.png" /> 124,3748<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LA_17_32720_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7042834.518449, -4161089.687523, -7042017.182128, -4160130.726004]
        })
    });
var lyr_LC2021_DEM_32720_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LC20-21_DEM_32720<br />\
    <img src="styles/legend/LC2021_DEM_32720_18_0.png" /> 123,7330<br />\
    <img src="styles/legend/LC2021_DEM_32720_18_1.png" /> 124,4208<br />\
    <img src="styles/legend/LC2021_DEM_32720_18_2.png" /> 124,5669<br />\
    <img src="styles/legend/LC2021_DEM_32720_18_3.png" /> 124,7699<br />\
    <img src="styles/legend/LC2021_DEM_32720_18_4.png" /> 126,1115<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LC2021_DEM_32720_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7041718.229834, -4161104.923926, -7039713.765579, -4158836.049256]
        })
    });
var lyr_LOSC_DEM_32720_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LOSC_DEM_32720<br />\
    <img src="styles/legend/LOSC_DEM_32720_19_0.png" /> 125,8841<br />\
    <img src="styles/legend/LOSC_DEM_32720_19_1.png" /> 126,4288<br />\
    <img src="styles/legend/LOSC_DEM_32720_19_2.png" /> 126,6740<br />\
    <img src="styles/legend/LOSC_DEM_32720_19_3.png" /> 126,9694<br />\
    <img src="styles/legend/LOSC_DEM_32720_19_4.png" /> 128,5202<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LOSC_DEM_32720_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7049940.452095, -4168654.561862, -7047782.065361, -4166255.759856]
        })
    });
var format_Curvas_Losc_DEM_20 = new ol.format.GeoJSON();
var features_Curvas_Losc_DEM_20 = format_Curvas_Losc_DEM_20.readFeatures(json_Curvas_Losc_DEM_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_Losc_DEM_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_Losc_DEM_20.addFeatures(features_Curvas_Losc_DEM_20);
var lyr_Curvas_Losc_DEM_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_Losc_DEM_20, 
                style: style_Curvas_Losc_DEM_20,
                popuplayertitle: 'Curvas_Losc_DEM',
                interactive: true,
                title: '<img src="styles/legend/Curvas_Losc_DEM_20.png" /> Curvas_Losc_DEM'
            });
var format_Curvas_LC20_21_DEM_21 = new ol.format.GeoJSON();
var features_Curvas_LC20_21_DEM_21 = format_Curvas_LC20_21_DEM_21.readFeatures(json_Curvas_LC20_21_DEM_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_LC20_21_DEM_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_LC20_21_DEM_21.addFeatures(features_Curvas_LC20_21_DEM_21);
var lyr_Curvas_LC20_21_DEM_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_LC20_21_DEM_21, 
                style: style_Curvas_LC20_21_DEM_21,
                popuplayertitle: 'Curvas_LC20_21_DEM',
                interactive: true,
                title: '<img src="styles/legend/Curvas_LC20_21_DEM_21.png" /> Curvas_LC20_21_DEM'
            });
var format_Curvas_LA_17_22 = new ol.format.GeoJSON();
var features_Curvas_LA_17_22 = format_Curvas_LA_17_22.readFeatures(json_Curvas_LA_17_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_LA_17_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_LA_17_22.addFeatures(features_Curvas_LA_17_22);
var lyr_Curvas_LA_17_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_LA_17_22, 
                style: style_Curvas_LA_17_22,
                popuplayertitle: 'Curvas_LA_17',
                interactive: true,
                title: '<img src="styles/legend/Curvas_LA_17_22.png" /> Curvas_LA_17'
            });
var format_Curva_LA1516_DEM_23 = new ol.format.GeoJSON();
var features_Curva_LA1516_DEM_23 = format_Curva_LA1516_DEM_23.readFeatures(json_Curva_LA1516_DEM_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curva_LA1516_DEM_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curva_LA1516_DEM_23.addFeatures(features_Curva_LA1516_DEM_23);
var lyr_Curva_LA1516_DEM_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curva_LA1516_DEM_23, 
                style: style_Curva_LA1516_DEM_23,
                popuplayertitle: 'Curva_LA15-16_DEM',
                interactive: true,
                title: '<img src="styles/legend/Curva_LA1516_DEM_23.png" /> Curva_LA15-16_DEM'
            });
var format_Curva_LA12_24 = new ol.format.GeoJSON();
var features_Curva_LA12_24 = format_Curva_LA12_24.readFeatures(json_Curva_LA12_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curva_LA12_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curva_LA12_24.addFeatures(features_Curva_LA12_24);
var lyr_Curva_LA12_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curva_LA12_24, 
                style: style_Curva_LA12_24,
                popuplayertitle: 'Curva_LA12',
                interactive: true,
                title: '<img src="styles/legend/Curva_LA12_24.png" /> Curva_LA12'
            });
var format_CurvaLA911_25 = new ol.format.GeoJSON();
var features_CurvaLA911_25 = format_CurvaLA911_25.readFeatures(json_CurvaLA911_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvaLA911_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvaLA911_25.addFeatures(features_CurvaLA911_25);
var lyr_CurvaLA911_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvaLA911_25, 
                style: style_CurvaLA911_25,
                popuplayertitle: 'CurvaLA9-11',
                interactive: true,
                title: '<img src="styles/legend/CurvaLA911_25.png" /> CurvaLA9-11'
            });
var format_Curvas_LA_08_10_26 = new ol.format.GeoJSON();
var features_Curvas_LA_08_10_26 = format_Curvas_LA_08_10_26.readFeatures(json_Curvas_LA_08_10_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_LA_08_10_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_LA_08_10_26.addFeatures(features_Curvas_LA_08_10_26);
var lyr_Curvas_LA_08_10_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_LA_08_10_26, 
                style: style_Curvas_LA_08_10_26,
                popuplayertitle: 'Curvas_LA_08_10',
                interactive: true,
                title: '<img src="styles/legend/Curvas_LA_08_10_26.png" /> Curvas_LA_08_10'
            });
var format_Curva_LA46_DEM_27 = new ol.format.GeoJSON();
var features_Curva_LA46_DEM_27 = format_Curva_LA46_DEM_27.readFeatures(json_Curva_LA46_DEM_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curva_LA46_DEM_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curva_LA46_DEM_27.addFeatures(features_Curva_LA46_DEM_27);
var lyr_Curva_LA46_DEM_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curva_LA46_DEM_27, 
                style: style_Curva_LA46_DEM_27,
                popuplayertitle: 'Curva_LA4-6_DEM',
                interactive: true,
                title: '<img src="styles/legend/Curva_LA46_DEM_27.png" /> Curva_LA4-6_DEM'
            });
var format_Curva_EC_28 = new ol.format.GeoJSON();
var features_Curva_EC_28 = format_Curva_EC_28.readFeatures(json_Curva_EC_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curva_EC_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curva_EC_28.addFeatures(features_Curva_EC_28);
var lyr_Curva_EC_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curva_EC_28, 
                style: style_Curva_EC_28,
                popuplayertitle: 'Curva_EC',
                interactive: true,
                title: '<img src="styles/legend/Curva_EC_28.png" /> Curva_EC'
            });
var format_Curva_LA12_29 = new ol.format.GeoJSON();
var features_Curva_LA12_29 = format_Curva_LA12_29.readFeatures(json_Curva_LA12_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curva_LA12_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curva_LA12_29.addFeatures(features_Curva_LA12_29);
var lyr_Curva_LA12_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curva_LA12_29, 
                style: style_Curva_LA12_29,
                popuplayertitle: 'Curva_LA1-2',
                interactive: true,
                title: '<img src="styles/legend/Curva_LA12_29.png" /> Curva_LA1-2'
            });
var format_Freatimetros_30 = new ol.format.GeoJSON();
var features_Freatimetros_30 = format_Freatimetros_30.readFeatures(json_Freatimetros_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Freatimetros_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freatimetros_30.addFeatures(features_Freatimetros_30);
var lyr_Freatimetros_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freatimetros_30, 
                style: style_Freatimetros_30,
                popuplayertitle: 'Freatimetros',
                interactive: true,
                title: '<img src="styles/legend/Freatimetros_30.png" /> Freatimetros'
            });
var format_Transectas_31 = new ol.format.GeoJSON();
var features_Transectas_31 = format_Transectas_31.readFeatures(json_Transectas_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transectas_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transectas_31.addFeatures(features_Transectas_31);
var lyr_Transectas_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transectas_31, 
                style: style_Transectas_31,
                popuplayertitle: 'Transectas',
                interactive: true,
                title: '<img src="styles/legend/Transectas_31.png" /> Transectas'
            });
var format_Muestreodesuelo_32 = new ol.format.GeoJSON();
var features_Muestreodesuelo_32 = format_Muestreodesuelo_32.readFeatures(json_Muestreodesuelo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muestreodesuelo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muestreodesuelo_32.addFeatures(features_Muestreodesuelo_32);
var lyr_Muestreodesuelo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Muestreodesuelo_32, 
                style: style_Muestreodesuelo_32,
                popuplayertitle: 'Muestreo de suelo',
                interactive: true,
                title: '<img src="styles/legend/Muestreodesuelo_32.png" /> Muestreo de suelo'
            });
var format_Predio_33 = new ol.format.GeoJSON();
var features_Predio_33 = format_Predio_33.readFeatures(json_Predio_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predio_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_33.addFeatures(features_Predio_33);
var lyr_Predio_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_33, 
                style: style_Predio_33,
                popuplayertitle: 'Predio',
                interactive: true,
                title: '<img src="styles/legend/Predio_33.png" /> Predio'
            });
var group_Curvasdenivel = new ol.layer.Group({
                                layers: [lyr_Curvas_Losc_DEM_20,lyr_Curvas_LC20_21_DEM_21,lyr_Curvas_LA_17_22,lyr_Curva_LA1516_DEM_23,lyr_Curva_LA12_24,lyr_CurvaLA911_25,lyr_Curvas_LA_08_10_26,lyr_Curva_LA46_DEM_27,lyr_Curva_EC_28,lyr_Curva_LA12_29,],
                                fold: 'close',
                                title: 'Curvas de nivel'});
var group_MDE_10m = new ol.layer.Group({
                                layers: [lyr_LA12_DEM_32720_10,lyr_EC_DEM_32720_11,lyr_LA46_DEM_32720_12,lyr_LA_08_10_32720_13,lyr_LA911_DEM_32720_14,lyr_LA_12_32720_15,lyr_LA1516_DEM_32720_16,lyr_LA_17_32720_17,lyr_LC2021_DEM_32720_18,lyr_LOSC_DEM_32720_19,],
                                fold: 'close',
                                title: 'MDE_10m'});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_Alazanas_1_4,lyr_Alazanas_2_5,lyr_Alazanas_3_6,lyr_Alazanas_4_7,lyr_Alazanas_5_8,lyr_Alazanas_6_9,],
                                fold: 'close',
                                title: 'NDVI'});

lyr_Googleearth_0.setVisible(true);lyr_MDE_30m_1.setVisible(true);lyr_Max_Inundacin_2.setVisible(true);lyr_Ocurrencia0100_3.setVisible(true);lyr_Alazanas_1_4.setVisible(true);lyr_Alazanas_2_5.setVisible(true);lyr_Alazanas_3_6.setVisible(true);lyr_Alazanas_4_7.setVisible(true);lyr_Alazanas_5_8.setVisible(true);lyr_Alazanas_6_9.setVisible(true);lyr_LA12_DEM_32720_10.setVisible(true);lyr_EC_DEM_32720_11.setVisible(true);lyr_LA46_DEM_32720_12.setVisible(true);lyr_LA_08_10_32720_13.setVisible(true);lyr_LA911_DEM_32720_14.setVisible(true);lyr_LA_12_32720_15.setVisible(true);lyr_LA1516_DEM_32720_16.setVisible(true);lyr_LA_17_32720_17.setVisible(true);lyr_LC2021_DEM_32720_18.setVisible(true);lyr_LOSC_DEM_32720_19.setVisible(true);lyr_Curvas_Losc_DEM_20.setVisible(true);lyr_Curvas_LC20_21_DEM_21.setVisible(true);lyr_Curvas_LA_17_22.setVisible(true);lyr_Curva_LA1516_DEM_23.setVisible(true);lyr_Curva_LA12_24.setVisible(true);lyr_CurvaLA911_25.setVisible(true);lyr_Curvas_LA_08_10_26.setVisible(true);lyr_Curva_LA46_DEM_27.setVisible(true);lyr_Curva_EC_28.setVisible(true);lyr_Curva_LA12_29.setVisible(true);lyr_Freatimetros_30.setVisible(true);lyr_Transectas_31.setVisible(true);lyr_Muestreodesuelo_32.setVisible(true);lyr_Predio_33.setVisible(true);
var layersList = [lyr_Googleearth_0,lyr_MDE_30m_1,lyr_Max_Inundacin_2,lyr_Ocurrencia0100_3,group_NDVI,group_MDE_10m,group_Curvasdenivel,lyr_Freatimetros_30,lyr_Transectas_31,lyr_Muestreodesuelo_32,lyr_Predio_33];
lyr_Curvas_Losc_DEM_20.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curvas_LC20_21_DEM_21.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curvas_LA_17_22.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curva_LA1516_DEM_23.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curva_LA12_24.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_CurvaLA911_25.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curvas_LA_08_10_26.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curva_LA46_DEM_27.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curva_EC_28.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Curva_LA12_29.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Freatimetros_30.set('fieldAliases', {'id': 'id', });
lyr_Transectas_31.set('fieldAliases', {'id': 'id', });
lyr_Muestreodesuelo_32.set('fieldAliases', {'id': 'id', });
lyr_Predio_33.set('fieldAliases', {'FID': 'FID', });
lyr_Curvas_Losc_DEM_20.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curvas_LC20_21_DEM_21.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curvas_LA_17_22.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curva_LA1516_DEM_23.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curva_LA12_24.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_CurvaLA911_25.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curvas_LA_08_10_26.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curva_LA46_DEM_27.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curva_EC_28.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Curva_LA12_29.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_Freatimetros_30.set('fieldImages', {'id': 'TextEdit', });
lyr_Transectas_31.set('fieldImages', {'id': 'TextEdit', });
lyr_Muestreodesuelo_32.set('fieldImages', {'id': 'TextEdit', });
lyr_Predio_33.set('fieldImages', {'FID': 'TextEdit', });
lyr_Curvas_Losc_DEM_20.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curvas_LC20_21_DEM_21.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curvas_LA_17_22.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curva_LA1516_DEM_23.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curva_LA12_24.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_CurvaLA911_25.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curvas_LA_08_10_26.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curva_LA46_DEM_27.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curva_EC_28.set('fieldLabels', {'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Curva_LA12_29.set('fieldLabels', {'ID': 'inline label - visible with data', 'ELEV': 'inline label - always visible', });
lyr_Freatimetros_30.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Transectas_31.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Muestreodesuelo_32.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Predio_33.set('fieldLabels', {'FID': 'inline label - always visible', });
lyr_Predio_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});