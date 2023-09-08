import React from 'react';
import { getAllPosts, getAllTags, getSinglePost } from '../../../lib/notionAPI';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';
import Tag from '../../../components/Tag/Tag';

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  const allTags = await getAllTags();

  return {
    props: {
      post,
      allTags,
    },
    revalidate: 60 * 60 * 6, // ISRを6時間毎に更新
  };
};

const Post = ({ post, allTags }) => {
  return (
    <section className="container lg:px-2 px-5 mx-auto mt-20 lg:w-2/5 ">
      <h2 className="w-full text-2xl font-medium">{post.metadata.title}</h2>
      <div className="border-b-2 w-1/3 mt-1 border-sky-900"></div>
      <span className="text-gray-500">Posted date at {post.metadata.date}</span>
      <br />
      {post.metadata.tags.map((tag: string, index: number) => (
        <>
          <p
            className="bg-sky-900 text-white rounded-xl font-medium px-2 mt-2 inline-block mr-2"
            key={index}
          >
            <Link href={`/posts/tag/${tag}/page/1`}>{tag}</Link>
          </p>
        </>
      ))}
      <div className="mt-10 font-medium">
        <ReactMarkdown
          children={post.markdown.parent}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        ></ReactMarkdown>
        <Link href="/">
          <span className="inline-block mb-20 mt-3 hover:text-red-500 transition-all duration-300">
            {' '}
            ← ホームに戻る
          </span>
        </Link>
        <Tag tags={allTags} />
      </div>
    </section>
  );
};

export default Post;
