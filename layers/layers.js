ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([389016.837780, 1033996.485032, 389836.109989, 1034388.241773]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Puntos_2 = new ol.format.GeoJSON();
var features_Puntos_2 = format_Puntos_2.readFeatures(json_Puntos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Puntos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_2.addFeatures(features_Puntos_2);
var lyr_Puntos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_2, 
                style: style_Puntos_2,
                popuplayertitle: 'Puntos',
                interactive: true,
                title: '<img src="styles/legend/Puntos_2.png" /> Puntos'
            });
var lyr_Curvas_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Curvas<br />\
    <img src="styles/legend/Curvas_3_0.png" /> 9<br />\
    <img src="styles/legend/Curvas_3_1.png" /> 10<br />\
    <img src="styles/legend/Curvas_3_2.png" /> 10<br />\
    <img src="styles/legend/Curvas_3_3.png" /> 11<br />\
    <img src="styles/legend/Curvas_3_4.png" /> 11<br />\
    <img src="styles/legend/Curvas_3_5.png" /> 12<br />\
    <img src="styles/legend/Curvas_3_6.png" /> 12<br />\
    <img src="styles/legend/Curvas_3_7.png" /> 13<br />\
    <img src="styles/legend/Curvas_3_8.png" /> 13<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Curvas_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8460776.874049, 1045392.713091, -8460611.041620, 1045788.542626]
        })
    });
var format_Predio_4 = new ol.format.GeoJSON();
var features_Predio_4 = format_Predio_4.readFeatures(json_Predio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Predio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_4.addFeatures(features_Predio_4);
var lyr_Predio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_4, 
                style: style_Predio_4,
                popuplayertitle: 'Predio',
                interactive: true,
                title: '<img src="styles/legend/Predio_4.png" /> Predio'
            });
var format_Solo_Curvas_5 = new ol.format.GeoJSON();
var features_Solo_Curvas_5 = format_Solo_Curvas_5.readFeatures(json_Solo_Curvas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Solo_Curvas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solo_Curvas_5.addFeatures(features_Solo_Curvas_5);
var lyr_Solo_Curvas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solo_Curvas_5, 
                style: style_Solo_Curvas_5,
                popuplayertitle: 'Solo_Curvas',
                interactive: true,
                title: '<img src="styles/legend/Solo_Curvas_5.png" /> Solo_Curvas'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Puntos_2.setVisible(true);lyr_Curvas_3.setVisible(true);lyr_Predio_4.setVisible(true);lyr_Solo_Curvas_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleSatellite_1,lyr_Puntos_2,lyr_Curvas_3,lyr_Predio_4,lyr_Solo_Curvas_5];
lyr_Puntos_2.set('fieldAliases', {'id': 'id', });
lyr_Predio_4.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Solo_Curvas_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Puntos_2.set('fieldImages', {'id': '', });
lyr_Predio_4.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Solo_Curvas_5.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_Puntos_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Predio_4.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', });
lyr_Solo_Curvas_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Solo_Curvas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});