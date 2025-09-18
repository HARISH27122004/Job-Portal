import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import '../css/salaryslider.css'

const SalarySlider = () => {
    const [range, setRange] = useState([50000, 80000]);

    return (
        <div className="salary-container">
            <div className="salary-header">
                <span className="label">Salary Per Month</span>
                <span className="values">
                    ₹{range[0] / 1000}k - ₹{range[1] / 1000}k
                </span>
            </div>

            <Slider
                range
                min={50000}
                max={100000}
                step={5000}
                value={range}
                onChange={setRange}
                trackStyle={[{ backgroundColor: "black", height: 4 }]}
                handleStyle={[
                    { borderColor: "white", height: 20, width: 20, marginTop: -8, backgroundColor: "black" },
                    { borderColor: "white", height: 20, width: 20, marginTop: -8, backgroundColor: "black" }
                ]}
                railStyle={{ backgroundColor: "#d7c9c9ff", height: 4 }}
            />
        </div>
    );
};

export default SalarySlider;
