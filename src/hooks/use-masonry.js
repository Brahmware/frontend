import imagesloaded from "imagesloaded";
import Isotope from "isotope-layout";
import { useEffect, useState } from "react";
import { flatDeep } from "../utils";

const useMasonry = (
    PortfolioData,
    masonryListWrap,
    masonryGrid,
    btnWrap,
    btn
) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const mixServices = PortfolioData.map((item) => {
            return item.service.map((cat) => cat);
        });
        const allCat = flatDeep(mixServices, Infinity);
        const commonServices = [...new Set(allCat)];

        setServices(commonServices);

        // This for Images
        const masonryList = document.querySelector(masonryListWrap);
        imagesloaded(masonryList, () => {
            const projectItems = masonryList.querySelectorAll(masonryGrid);
            let start = 1;
            while (start < projectItems.length) {
                projectItems[start].classList.add("grid-width-2");
                start += 4;
            }
            let Iso = new Isotope(masonryList, {
                itemSelector: masonryGrid,
            });

            const filterWrap = document.querySelector(btnWrap);
            const filterItems = document.querySelectorAll(btn);
            filterItems.forEach((filterItem) => {
                filterItem.addEventListener("click", (e) => {
                    const filterCate = filterItem.dataset.filter;
                    filterWrap
                        .querySelector(".active")
                        .classList.remove("active");
                    e.target.classList.add("active");
                    Iso.arrange({
                        filter: filterCate,
                    });
                });
            });
        });
    }, [btn, btnWrap, masonryGrid, masonryListWrap, PortfolioData]);
    return { services };
};

export default useMasonry;
