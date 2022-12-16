import React from 'react';

const withIdKey = withKey('id');

interface IBlockProps {
  title: string;
  id: string;
}

function Feed(props: { blocks: IBlockProps[] }) {
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}

function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

function withKey(key: string) {
  return <E, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(component, { ...props, key: key ? props[key as keyof E] : index }, []);
}
