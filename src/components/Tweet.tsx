import { Suspense } from "react";
import {
  type TweetProps,
  type TwitterComponents,
  QuotedTweet,
  TweetBody,
  TweetContainer,
  TweetHeader,
  TweetInfo,
  TweetNotFound,
  TweetSkeleton,
  enrichTweet,
} from "react-tweet";
import type { Tweet as TTweet } from "react-tweet/api";
import { getTweet } from "react-tweet/api";
import "./component-styles.css";

type Props = {
  tweet: TTweet;
  components?: TwitterComponents;
};

export const TweetUI = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer className="tweet-container">
      <li>
        <TweetHeader tweet={tweet} components={components} />
        {/* {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />} */}
        <TweetBody tweet={tweet} />
        {/* {tweet.mediaDetails?.length ? <TweetMedia tweet={tweet} components={components} /> : null} */}
        {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
        <TweetInfo tweet={tweet} />
        {/* <TweetActions tweet={tweet} /> */}
      </li>
    </TweetContainer>
  );
};

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound />;
  }

  return <TweetUI tweet={tweet} components={components} />;
};

export const Tweet = ({ fallback = <TweetSkeleton />, ...props }: TweetProps) => (
  <Suspense fallback={fallback}>
    <TweetContent {...props} />
  </Suspense>
);
