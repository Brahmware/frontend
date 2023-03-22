import React from 'react';
import { select, geoOrthographic, geoPath, timer, drag } from 'd3';
import { useD3 } from '../../hooks/use-d3';
import world from '../../data/world.json';

const MapComponent = (props) => {
    const ref = useD3(
        (svg) => {

            try {
                const config = {
                    speed: props.speed ? props.speed : 0.001,
                    verticalTilt: -23,
                    horizontalTilt: 0
                }
                const projection = geoOrthographic();
                const geoPathProjection = geoPath().projection(projection);

                drawGlobe();
                enableRotation();

                function drawGlobe() {

                    svg.selectAll(".countries")
                        .data(world.features)
                        .join("path")
                        .attr("class", "countries")
                        .attr("d", geoPathProjection)
                        .attr("id", (d) => d.id);

                }

                function enableRotation() {

                    timer(function (elapsed) {

                        projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
                        svg.selectAll("path").attr("d", geoPathProjection);

                    });
                }

                function enableDrag() {

                }

                props.locations.map((location, key) => {
                    return select(".world-map").select(`#${location.iso}`).attr("class", "countries we-are-here");
                });
            } catch (error) { }


        },
        [props.locations.length]
    );

    return (
        <svg
            className={props.class ? props.class : "world-map"}
            viewBox="225 0 510 500"
            ref={ref}
        />
    );
}

export default MapComponent;