import React from 'react';
import * as d3 from 'd3';
import { useD3 } from '../../hooks/use-d3';
import world from '../../data/world.json';

const MapComponent = (props) => {
    const ref = useD3(
        (svg) => {
            const projection = d3.geoEquirectangular().scale(115);
            const path = d3.geoPath().projection(projection);

            let countryGroups = svg
                .selectAll("path")
                .data(world.features)
                .enter()
                .append("g")
                .attr("class", (d) => d.id);

            countryGroups
                .append("path")
                .attr("class", "countries")
                .attr("id", (d) => d.id)
                .attr("d", path)

            props.locations.map((location, key) => {
                return d3.select(".world-map").select(`#${location.iso}`).attr("class", "countries we-are-here");
            });

        },
        [props.locations.length]
    );

    return (
        <svg
            className="world-map"
            viewBox="115 80 729.6823 287.0981"
            ref={ref}
        />
    );
}

export default MapComponent;