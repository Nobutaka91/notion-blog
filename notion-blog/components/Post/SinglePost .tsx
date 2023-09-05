import React from 'react';

type Props = {
  title: string;
  description: string;
  date: string;
  tag: string;
  slug: string;
};

const SinglePost = (props: Props) => {
  const { title, description, date, tag, slug } = props;

  return <div>{title}</div>;
};

export default SinglePost;
