/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ActiclesPageProps {
  className?: string;
}

const articles = {
    id: '1',
    user: {
        id: '1',
        username: 'asd',
        avatar: 'https://media.tenor.com/Q7sPiGp7hhMAAAAC/patrick-bateman-smile.gif',
    },
    title: 'Illusion of free will',
    subtitle: 'This neuroscientist says your sense of free will is an illusion',
    img: 'https://news.stanford.edu/wp-content/uploads/2017/05/sapolsky_vert.jpg',
    views: 1234,
    createdAt: '05.05.2033',
    type: [
        'Psychology',
        'philosophy',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'tittle',
            paragraphs: [
                'Robert Sapolsky, who looks like Jerry Garcia would if Jerry Garcia were still alive, is a rock star of neuroscience. He’s just one of those people—when he was a kid fascinated with primates he started, at age 13, teaching himself Swahili so he could go to Africa to study them. Now 60, Sapolsky is a cross-appointed professor at Stanford University (biology and neuroscience), and a research associate at the National Museums of Kenya. Along the way, he picked up a MacArthur genius award. His latest book is Behave: The Biology of Humans at Our Best and Worst, a masterful synthesis of current scientific thinking on the biological roots of our behaviour.',
                'Just about everything Sapolsky touches on is hot-button politics, from questions of free will and criminal responsibility (he’s written extensively on “neurolaw”) to xenophobia and tribalism, war and peace, to the co-evolution of culture and brain. We are the sum of our parts, and much, much more, as Sapolsky explains.',
                'It is complicated, isn’t it?',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: 'const memoizedCallback = useCallback(\n() => {\ndoSomething(a, b);\n},\n[a, b\n],\n);',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'tittle',
            paragraphs: [
                'Yeah, everything. It’s complicated because we’re every inch of the way biological organisms and lots of people have trouble accepting that. It’s complicated because there is an enormous causative pull towards deciding our behaviour can be entirely understood by focusing on one part of the brain or one gene or one hormone or one early experience, when you’re really not going to get anywhere unless you look at the interactions of all of those. It’s complicated because there’s a very strong tendency to want to come up with attributions that involve harsh judgments for behaviour instead of remembering that we are all subject to biological forces we have very little control over. So, yeah: complicated.',
                'Is that because we’re the ultimate split-the-difference species? Some primates are monogamous, some are promiscuous, then there’s us. We hate violence, except when we like it. We go down the middle.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://www.sloww.co/wp-content/uploads/2022/08/Sloww-Free-Will-Robert-Sapolsky.jpg',
            title: 'The Biology of Behavior with Robert Sapolsky',
        },
        {
            id: '6',
            type: 'TEXT',
            title: 'tittle',
            paragraphs: [
                'Yeah, everything. It’s complicated because we’re every inch of the way biological organisms and lots of people have trouble accepting that. It’s complicated because there is an enormous causative pull towards deciding our behaviour can be entirely understood by focusing on one part of the brain or one gene or one hormone or one early experience, when you’re really not going to get anywhere unless you look at the interactions of all of those. It’s complicated because there’s a very strong tendency to want to come up with attributions that involve harsh judgments for behaviour instead of remembering that we are all subject to biological forces we have very little control over. So, yeah: complicated.',
                'Is that because we’re the ultimate split-the-difference species? Some primates are monogamous, some are promiscuous, then there’s us. We hate violence, except when we like it. We go down the middle.',
            ],
        },
        {
            id: '3',
            type: 'CODE',
            code: 'const memoizedCallback = useCallback(\n() => {\ndoSomething(a, b);\n},\n[a, b\n],\n);',
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'tittle',
            paragraphs: [
                'Yeah, everything. It’s complicated because we’re every inch of the way biological organisms and lots of people have trouble accepting that. It’s complicated because there is an enormous causative pull towards deciding our behaviour can be entirely understood by focusing on one part of the brain or one gene or one hormone or one early experience, when you’re really not going to get anywhere unless you look at the interactions of all of those. It’s complicated because there’s a very strong tendency to want to come up with attributions that involve harsh judgments for behaviour instead of remembering that we are all subject to biological forces we have very little control over. So, yeah: complicated.',
                'Is that because we’re the ultimate split-the-difference species? Some primates are monogamous, some are promiscuous, then there’s us. We hate violence, except when we like it. We go down the middle.',
            ],
        },
    ],
} as unknown as Article;

const ArticlesPage = ({ className }: ActiclesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ActiclesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={
                    new Array(16)
                        .fill(0)
                        .map((item, index) => ({
                            ...articles,
                            id: String(index),
                        }))
                }
            />
        </div>
    );
};

export default memo(ArticlesPage);
