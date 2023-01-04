import React from "react";
import { Card } from "./Card";
import styles from "./cardslist.scss";
import { usePostsData } from "../../hooks/usePostsData";
import { Skeleton } from "./Skeleton";
import { postsRequestAsync } from "../../store/posts/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { EIcons, Icon } from "../Icon";

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
        }
      },
      {
        rootMargin: "0px",
      },
    );

    if (bottomOfRef.current && token && data.length % 20 !== 0) {
      observer.observe(bottomOfRef.current);
    }

    return () => {
      if (bottomOfRef.current && token) {
        observer.unobserve(bottomOfRef.current);
      }
    };
  }, [bottomOfRef.current, after, token]);

  function handleClickLoadMore() {
    dispatch(postsRequestAsync());
  }

  return (
    <>
      <ul className={styles.cardsList}>
        {Object.values(data).length === 0 && !loading && !error && (
          <div role="alert">
            {skeletons}
            <div className={styles.error}>
              &#128577; <br /> Хмм... здесь пока пусто
            </div>
          </div>
        )}

        {Object.values(data).map((post) => (
          <Card key={post.data?.id} data={post.data} />
        ))}

        {loading && skeletons}

        <div ref={bottomOfRef} style={{ display: loading ? "none" : "" }} />

        {error && (
          <div role="alert">
            {skeletons}
            <div className={styles.error}>
              &#128683; <br /> К сожалению, что-то пошло не так
            </div>
          </div>
        )}
      </ul>
      {data.length && data.length % 20 === 0 ? (
        <div className={styles.loadMore} onClick={handleClickLoadMore}>
          <Icon name={EIcons.add} size={19} />
          <span>Загрузить еще...</span>
        </div>
      ) : null}
    </>
  );
}
