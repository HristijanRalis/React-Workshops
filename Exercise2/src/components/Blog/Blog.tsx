import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";

type Props = {
  section: "Latest" | "Related";
};

export default class Blog extends Component<Props> {
  renderSectionContent() {
    const section = this.props.section;

    if (section === "Latest") {
      return (
        <>
          <BlogPost
            img="https://picsum.photos/id/237/800"
            title="Blog 1 title"
            body="Some Description 1"
          />
          <BlogPost
            img="https://picsum.photos/id/238/800"
            title="Blog 1 title"
            body="Some Description 1"
          />
          <BlogPost
            img="https://picsum.photos/id/239/800"
            title="Blog 1 title"
            body="Some Description 1"
          />
        </>
      );
    }
    if (section === "Related") {
      return (
        <>
          <BlogPost
            img="https://picsum.photos/id/235/800"
            title="Blog 4 title"
            body="Some Description 1"
          />
          <BlogPost
            img="https://picsum.photos/id/234/800"
            title="Blog 5 title"
            body="Some Description 1"
          />
          <BlogPost
            img="https://picsum.photos/id/233/800"
            title="Blog 6 title"
            body="Some Description 1"
          />
        </>
      );
    }
  }

  render() {
    return <div className="Blog flex">{this.renderSectionContent()}</div>;
  }
}
