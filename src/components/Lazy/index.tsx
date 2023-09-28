import React, { lazy, Suspense } from "react";

const LazyThinking = lazy(() => import("./Thinking"));
const LazyUserChat = lazy(() => import("~/components/chat/UserChat"));
const LazyAiChat = lazy(() => import("~/components/chat/AiChat"));
const InputLoanding = lazy(() => import("~/components/Lazy/InputLoading"));
const Thinking: React.FC = () => {
  return (
    <Suspense
      fallback={<span className="loading loading-ring loading-lg"></span>}
    >
      <LazyThinking />
    </Suspense>
  );
};
const UserChat: React.FC<{ message: any }> = ({ message }) => {
  return (
    <Suspense
      fallback={<span className="loading loading-ring loading-lg"></span>}
    >
      <LazyUserChat message={message} />
    </Suspense>
  );
};
const AiChat: React.FC<{ message: any }> = ({ message }) => {
  return (
    <Suspense
      fallback={<span className="loading loading-ring loading-lg"></span>}
    >
      <LazyAiChat message={message} />
    </Suspense>
  );
};


export const LazyInputLoadingMemo = React.memo(InputLoanding);
export const LazyUserChatMemo = React.memo(UserChat);
export const LazyAiChatMemo = React.memo(AiChat);
export const LazyThinkingMemo = React.memo(Thinking);
