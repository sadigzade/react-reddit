import React from "react";
import { Card } from "./Card";
import styles from "./cardslist.scss";
import { usePostsData } from "../../hooks/usePostsData";
import { Skeleton } from "./Skeleton";
import { postsRequestAsync } from "../../store/posts/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";

export function CardsList() {
  const skeletons = [...new Array(5)].map((val, index) => (
    <li key={index}>
      <Skeleton />
    </li>
  ));
  const { data, loading, error } = usePostsData();
  const bottomOfRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<any>();
  const after = useSelector<RootState, string>((state) => state.posts.after);
  const token = useSelector<RootState, string>((state) => state.token);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          dispatch(postsRequestAsync());
          console.log("load more");
        }
      },
      {
        rootMargin: "100px",
      },
    );

    if (bottomOfRef.current) {
      observer.observe(bottomOfRef.current);
    }

    return () => {
      if (bottomOfRef.current) {
        observer.unobserve(bottomOfRef.current);
      }
    };
  }, [bottomOfRef.current, after, token]);

  return (
    <ul className={styles.cardsList}>
      {Object.values(data).length === 0 && !loading && !error && (
        <div role="alert">
          {skeletons}
          <div className={styles.error}>
            &#128577; <br /> Хмм... здесь пока пусто
          </div>
        </div>
      )}
      {loading
        ? skeletons
        : Object.values(data).map((post) => <Card key={post.data?.id} data={post.data} />)}
      <div ref={bottomOfRef} />
      {error && (
        <div role="alert">
          {skeletons}
          <div className={styles.error}>
            &#128683; <br /> К сожалению, что-то пошло не так
          </div>
        </div>
      )}
    </ul>
  );
}
