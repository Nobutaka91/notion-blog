import Link from 'next/link';
import React from 'react';

type Props = {
  tags: string[];
};

const Tag = (props: Props) => {
  const { tags } = props;
  return (
    <div className="mx-2">
      <section className="lg:w-1/2 mb-4 mx-auto bg-pink-100 rounded-xl p-3 shadow-2xl ">
        <div className="font-medium mb-2">タグ検索</div>
        <div className="flex flex-wrap gap-5">
          {tags.map((tag: string, index: number) => (
            <>
              <Link href={`/posts/tag/${tag}/page/1`} key={index}>
                <span className="cursor-pointer px-2 bg-gray-400 font-medium pb-1 rounded-xl inline-block shadow-2xl hover:shadow-none hover:translate-y-0.5 duration-300 transition-all">
                  {tag}
                </span>
              </Link>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tag;
