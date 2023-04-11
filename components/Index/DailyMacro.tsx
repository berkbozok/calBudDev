import React, { useContext } from "react";
import Protein from "../../shared/protein";
import Fat from "../../shared/fat";
import Carbs from "../../shared/carbs";
import DemoPie from "../../components/Charts/PieChart";
import Link from "next/link";
import { GlobalContext, globalContextTypes } from "@/pages";
import { Button } from "antd";
function DailyMacro() {
  const { fatIntake, carbIntake, proteinIntake, bmrValue }: globalContextTypes =
    useContext(GlobalContext);

  let totalCal = proteinIntake + carbIntake + fatIntake;
  let proteinPercentage = Math.ceil((proteinIntake / totalCal) * 100);
  let carbsPercentage = Math.ceil((carbIntake / totalCal) * 100);
  let fatPercentage = Math.ceil((fatIntake / totalCal) * 100);
  return (
    <div className="daily-macro-title">
      <h2 className="right-side-title">Your Daily Macro Goals</h2>
      <div className="ring">
        <h3>Total Maintain</h3>
        {bmrValue !== 0 ? (
          <h3 className="bmr"> {bmrValue} </h3>
        ) : (
          <h3 className="bmr-calculate"> Calculate </h3>
        )}
        <h3> kcal</h3>
      </div>
      {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
        <>
          <div className="table">
            <div className="row"></div>
            <div className="row">
              <div className="cell">
                Mild weight loss <div>(0.25 kg/week)</div>
              </div>
              <div className="cell">
                <b>{Math.ceil(bmrValue * 0.92)}</b> <span>(92%)</span>
                <div>Calories/day</div>
              </div>
            </div>
            <div className="row">
              <div className="cell">
                Weight loss <div>(0.5 kg/week)</div>
              </div>
              <div className="cell">
                <b> {Math.ceil(bmrValue * 0.83)}</b> <span>(83%)</span>
                <div>Calories/day</div>
              </div>
            </div>
            <div className="row">
              <div className="cell">
                Extreme weight loss <div>(1 kg/week)</div>
              </div>
              <div className="cell">
                <b> {Math.ceil(bmrValue * 0.66)}</b> <span>(66%)</span>
                <div>Calories/day</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="daily-macro-value">
        <div className="macro-value-div">
          <div className="value-box-alignment">
            <Protein />
            <span className="value-title">{proteinIntake}g</span>
            <span> Protein</span>
          </div>
        </div>
        <div className="macro-value-div">
          <div className="value-box-alignment">
            <Carbs />
            <span className="value-title">{carbIntake}g</span>
            <span> Carbs</span>
          </div>
        </div>
        <div className="macro-value-div">
          <div className="value-box-alignment">
            <Fat />
            <span className="value-title">{fatIntake}g</span>
            <span> Fat</span>
          </div>
        </div>
      </div>
      {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
        <>
          <div className="formula-title">Our formula for you</div>
          <div className="pie-chart-alignment">
            <div className="info-panel">
              If you are counting macros for bodybuilding and muscle gain, you
              will want to add overall calories to put on weight. Try this range
              of macro ratio:&nbsp;
              <div>
                <b>{proteinPercentage}</b>% protein, &nbsp;
                <b>{carbsPercentage}%</b> carbs, and&nbsp;
                <b>{fatPercentage}%</b> fat.
              </div>
            </div>
            <DemoPie
              proteinIntake={proteinIntake}
              carbIntake={carbIntake}
              fatIntake={fatIntake}
            />
          </div>
        </>
      ) : (
        <>
          <div className="replacement-title">
            Calculate Macros to see a detailed review
          </div>
        </>
      )}
      <Link href="/trainers">
        <Button className="find-trainer">Consult with a Trainer</Button>
      </Link>
    </div>
  );
}

export default DailyMacro;