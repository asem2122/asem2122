import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import * as olProj from 'ol/proj';
import Point from 'ol/geom/Point';
import { Feature, Overlay } from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
import { Geometry } from 'ol/geom';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map!: Map
  marker: Feature;
  tileLayer: TileLayer<any>;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer<any>;
  xyzSource: XyzSource;


ngOnInit(){
  this.marker = new Feature({
    geometry: new Point([7.027243325432907,51.574279431273595])
});
this.vectorSource = new VectorSource({
  features: [this.marker]
});

this.vectorLayer = new VectorLayer({
  source: this.vectorSource
});

// XYZ
this.xyzSource = new XyzSource({
  url: 'http://tile.osm.org/{z}/{x}/{y}.png'
});

                      
 

 this.tileLayer = new TileLayer({
   source: this.xyzSource
 });


  this.map = new Map({
    target: 'map',
    layers: [
      this.vectorLayer,
      this.tileLayer,
    ],
    view: new View({
      center: olProj.fromLonLat([7.027243325432907,51.574279431273595]),
      zoom: 18
    })
  });
  var marker = new Overlay({
    position: [7.027243325432907,51.574279431273595],
  positioning: 'center-center',
  // element: document.getElementById('marker'),
   stopEvent: false
 });
 this.map.addOverlay(marker);
}

}
