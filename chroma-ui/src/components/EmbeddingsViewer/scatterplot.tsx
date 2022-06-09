// @ts-nocheck

'use strict';
import createScatterplot from 'regl-scatterplot';

export default function scatterplot (points, colorsScale, opts) {
  var config = Object.assign({}, opts || {}, {
    backgroundColor: opts.backgroundColor || [1, 1, 1, 0],
    pixelRatio: opts.pixelRatio || Math.min(window.devicePixelRatio, 1.5),
  });

  return new Promise(function (resolve, reject) {
  	try {
	    var canvas = config.canvas;

		const scatterplot = createScatterplot({
		  canvas,
		  width: 'auto',
		  height: 'auto',
		  pointSize: 5
		});
		scatterplot.set({ backgroundColor: '#F3F5F6' }); 
		scatterplot.draw(points);
		scatterplot.set({ opacity: [0,1] });
		scatterplot.set({ colorBy: 'valueW', opacityBy: 'valueZ', pointColor: colorsScale, pointOutlineWidth: 5,  });
		scatterplot.subscribe('select', opts.selectHandler);
		scatterplot.subscribe('deselect', opts.deselectHandler);
		config['scatterplot'] = scatterplot
		config['regl'] = scatterplot.get('regl')
	        
	  } catch (e) {
	    if (regl) regl.destroy();
	    throw e;
	  }
	  resolve(config)
  });

  
}
