const mistake = [] as Array<number>;
mistake.push(1);

let bigObject = {
  commit: {
    id: '123412v51h2v51lh23b5j12v5hj1l4blj1bn25vh1v4k5b13b41j',
    short_id: '12312421jnjldds',
    title: 'JS fix',
    author_name: 'Example name',
    author_email: 'user@example.com',
    created_at: '2014-02-27T10:27:00+02:00',
  },
  commits: {
    id: '123412v51h2v51lh23b5j12v5hj1l4blj1bn25vh1v4k5b13b41j',
    short_id: '12312421jnjldds',
    title: 'JS fix',
    author_name: 'Example name',
    author_email: 'user@example.com',
    created_at: '2014-02-27T10:27:00+02:00',
  },
  diffs: {
    old_path: 'files/js/application.js',
    new_path: 'files/js/application.js',
    a_mode: null,
    b_mode: 100644,
    new_file: false,
    renamed_file: false,
    delected_file: false,
  },
  compare_timeout: false,
  compare_same_ref: false,
};

type TMyBigObject = typeof bigObject;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
};

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

typedBigObjectDeep.compare_same_ref = true;
typedBigObjectDeep.diffs.new_file = true;

type TSomeType = MyReadonlyDeep<TMyBigObject>;

function getProperty<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

const dog = {
  firstName: 'Fluffy',
};

getProperty(dog, 'firstName');

// Карирование и функции высшего порядка

// add(1)(2)

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

const addOne = add(1);
const addSix = add(6);

addOne(2); // -> 3
addSix(2); // -> 8

function withKey(key?: string) {
  return <E extends object, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(component, { ...props, key: key ? props[key as keyof E] : index }, []);
}

const withIdKey = withKey('id');

interface IBlockProps {
  title: string;
  id: string;
}

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {/* {props.blocks.map((block) => {
        <Block key={block.id} {...block} />;
      })} */}
      {props.blocks.map(withIdKey(Block))}
    </div>
  );
}

function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

///------------

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(fn: E) =>
    (e: React.SyntheticEvent<T>) =>
      fn(e.currentTarget[key]);
}

const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');

function Input({ value, onChange }: { onChange: (value: string) => void; value: string }) {
  // return <input value={props.value} onChange={(e) => e.currentTarget.value} />;
  return <input value={value} onChange={getValue(onChange)} />;
}

function Checkbox(props: { onChange: (value: boolean) => void; value: boolean }) {
  return <input type="checkbox" checked={props.value} onChange={(e) => e.currentTarget.checked} />;
}

///------------

function NotStandartLink(props: any) {
  // const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   props.onClick();
  // };

  // return <a onClick={(e) => handleClick(e)}></a>;
  // return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>;
  return <a onClick={preventDefault(stopPropagation(props.onClick))}></a>;
}

function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}
