import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";

import "./CourseOverviewList.scss";

const CourseOverviewList = ({ title, category, challenges, lessons }) => {
  const challengeJSX = challenges.map((item, index) => {
    return (
      <CourseOverviewListItem
        id={index}
        key={index}
        title={item.title}
        duration={item.duration}
        category={category}
        type={item.type}
      />
    );
  });

  const lessonJSX = lessons.map((item, index) => {
    return (
      <CourseOverviewListItem
        data-testid="course-list-items"
        id={index}
        key={index}
        title={item.title}
        duration={item.duration}
        category={category}
        type={item.type}
      />
    );
  });

  const displayJSX = () => {
    if (category === "lessons") {
      return lessonJSX;
    } else if (category === "challenges") {
      return challengeJSX;
    } else if (category === "additional info") {
      // This is to be replaced once the format for additional information is know.
      return null;
    }
  };

  return (
    <div>
      <h1 data-testid="course-list-heading" className="list-container__title">
        {title}
      </h1>
      <div data-testid="course-list-items">{displayJSX()}</div>
    </div>
  );
};

export default CourseOverviewList;
