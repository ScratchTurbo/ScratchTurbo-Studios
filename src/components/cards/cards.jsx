import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import Draggable from 'react-draggable';
import Box from '../box/box.jsx';

import styles from './card.css';

import shrinkIcon from './icon--shrink.svg';
import expandIcon from './icon--expand.svg';

import rightArrow from './icon--next.svg';
import leftArrow from './icon--prev.svg';

import helpIcon from '../../lib/assets/icon--tutorials.svg';
import closeIcon from './icon--close.svg';

import {translateVideo} from '../../lib/libraries/decks/translate-video.js';
import {translateImage} from '../../lib/libraries/decks/translate-image.js';

const CardHeader = ({onCloseCards, onShrinkExpandCards, onShowAll, totalSteps, step, expanded}) => (
    <div className={expanded ? styles.headerButtons : classNames(styles.headerButtons, styles.headerButtonsHidden)}>
        <div
            className={styles.allButton}
            onClick={onShowAll}
        >
            <img
                className={styles.helpIcon}
                src={helpIcon}
            />
            <FormattedMessage
                defaultMessage="Tutorials"
                description="Title for button to return to tutorials library"
                id="gui.cards.all-tutorials"
            />
        </div>
        {totalSteps > 1 ? (
            <div className={styles.stepsList}>
                {Array(totalSteps).fill(0)
                    .map((_, i) => (
                        <div
                            className={i === step ? styles.activeStepPip : styles.inactiveStepPip}
                            key={`pip-step-${i}`}
                        />
                    ))}
            </div>
        ) : null}
        <div className={styles.headerButtonsRight}>
            <div
                className={styles.shrinkExpandButton}
                onClick={onShrinkExpandCards}
            >
                <img
                    draggable={false}
                    src={expanded ? shrinkIcon : expandIcon}
                />
                {expanded ?
                    <FormattedMessage
                        defaultMessage="Shrink"
                        description="Title for button to shrink how-to card"
                        id="gui.cards.shrink"
                    /> :
                    <FormattedMessage
                        defaultMessage="Expand"
                        description="Title for button to expand how-to card"
                        id="gui.cards.expand"
                    />
                }
            </div>
            <div
                className={styles.removeButton}
                onClick={onCloseCards}
            >
                <img
                    className={styles.closeIcon}
                    src={closeIcon}
                />
                <FormattedMessage
                    defaultMessage="Close"
                    description="Title for button to close how-to card"
                    id="gui.cards.close"
                />
            </div>
        </div>
    </div>
);

// Video step needs to know if the card is being dragged to cover the video
// so that the mouseup is not swallowed by the iframe.
const VideoStep = ({video, dragging}) => (
    <div className={styles.stepVideo}>
        {dragging ? (
            <div className={styles.videoCover} />
        ) : null}
        <iframe
            allowFullScreen
            allowTransparency="true"
            frameBorder="0"
            height="257"
            scrolling="no"
            src={`https://fast.wistia.net/embed/iframe/${video}?seo=false&videoFoam=true`}
            title="📹"
            width="466"
        />
        <script
            async
            src="https://fast.wistia.net/assets/external/E-v1.js"
        />
    </div>
);

VideoStep.propTypes = {
    dragging: PropTypes.bool.isRequired,
    video: PropTypes.string.isRequired
};

const ImageStep = ({title, image}) => (
    <Fragment>
        <div className={styles.stepTitle}>
            {title}
        </div>
        <div className={styles.stepImageContainer}>
            <img
                className={styles.stepImage}
                draggable={false}
                src={image}
            />
        </div>
    </Fragment>
);

ImageStep.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired
};

const NextPrevButtons = ({isRtl, onNextStep, onPrevStep, expanded}) => (
    <Fragment>
        {onNextStep ? (
            <div>
                <div className={expanded ? (isRtl ? styles.leftCard : styles.rightCard) : styles.hidden} />
                <div
                    className={expanded ? (isRtl ? styles.leftButton : styles.rightButton) : styles.hidden}
                    onClick={onNextStep}
                >
                    <img
                        draggable={false}
                        src={isRtl ? leftArrow : rightArrow}
                    />
                </div>
            </div>
        ) : null}
        {onPrevStep ? (
            <div>
                <div className={expanded ? (isRtl ? styles.rightCard : styles.leftCard) : styles.hidden} />
                <div
                    className={expanded ? (isRtl ? styles.rightButton : styles.leftButton) : styles.hidden}
                    onClick={onPrevStep}
                >
                    <img
                        draggable={false}
                        src={isRtl ? rightArrow : leftArrow}
                    />
                </div>
            </div>
        ) : null}
    </Fragment>
);

NextPrevButtons.propTypes = {
    expanded: PropTypes.bool.isRequired,
    isRtl: PropTypes.bool,
    onNextStep: PropTypes.func,
    onPrevStep: PropTypes.func
};
CardHeader.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onCloseCards: PropTypes.func.isRequired,
    onShowAll: PropTypes.func.isRequired,
    onShrinkExpandCards: PropTypes.func.isRequired,
    step: PropTypes.number,
    totalSteps: PropTypes.number
};

const PreviewsStep = ({deckIds, content, onActivateDeckFactory, onShowAll}) => (
    <Fragment>
        <div className={styles.stepTitle}>
            <FormattedMessage
                defaultMessage="More things to try!"
                description="Title card with more things to try"
                id="gui.cards.more-things-to-try"
            />
        </div>
        <div className={styles.decks}>
            {deckIds.slice(0, 2).map(id => (
                <div
                    className={styles.deck}
                    key={`deck-preview-${id}`}
                    onClick={onActivateDeckFactory(id)}
                >
                    <img
                        className={styles.deckImage}
                        draggable={false}
                        src={content[id].img}
                    />
                    <div className={styles.deckName}>{content[id].name}</div>
                </div>
            ))}
        </div>
        <div className={styles.seeAll}>
            <div
                className={styles.seeAllButton}
                onClick={onShowAll}
            >
                <FormattedMessage
                    defaultMessage="See more"
                    description="Title for button to see more in how-to library"
                    id="gui.cards.see-more"
                />
            </div>
        </div>
    </Fragment>
);

PreviewsStep.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.shape({
            name: PropTypes.node.isRequired,
            img: PropTypes.string.isRequired,
            steps: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.node,
                image: PropTypes.string,
                video: PropTypes.string,
                deckIds: PropTypes.arrayOf(PropTypes.string)
            }))
        })
    }).isRequired,
    deckIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    onActivateDeckFactory: PropTypes.func.isRequired,
    onShowAll: PropTypes.func.isRequired
};

const Cards = props => {
    const {
        activeDeckId,
        content,
        dragging,
        isRtl,
        locale,
        onActivateDeckFactory,
        onCloseCards,
        onShrinkExpandCards,
        onDrag,
        onStartDrag,
        onEndDrag,
        onShowAll,
        onNextStep,
        onPrevStep,
        step,
        expanded,
        ...posProps
    } = props;
    let {x, y} = posProps;

    if (activeDeckId === null) return;

    if (x === 0 && y === 0) {
        // initialize positions
        x = isRtl ? -292 : 292;
        // The tallest cards are about 385px high, and the default position is pinned
        // to near the bottom of the blocks palette to allow room to work above.
        const tallCardHeight = 385;
        const bottomMargin = 60; // To avoid overlapping the backpack region
        y = window.innerHeight - tallCardHeight - bottomMargin;
    }

    const steps = content[activeDeckId].steps;

    return (
        /* <Box
            // Use static `cards-overlay` class for bounds of draggables
            className={styles.cardContainerOverlay}
            style={{
                width: 500, // props.stageSize.width,
                height: 500 // props.stageSize.height
            }}
        > */
        <Draggable
            bounds="parent"
            position={{x: x, y: y}}
            onDrag={onDrag}
            onStart={onStartDrag}
            onStop={onEndDrag}
        >
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <CardHeader
                        expanded={expanded}
                        step={step}
                        totalSteps={steps.length}
                        onCloseCards={onCloseCards}
                        onShowAll={onShowAll}
                        onShrinkExpandCards={onShrinkExpandCards}
                    />
                    <div className={expanded ? styles.stepBody : styles.hidden}>
                        {steps[step].deckIds ? (
                            <PreviewsStep
                                content={content}
                                deckIds={steps[step].deckIds}
                                onActivateDeckFactory={onActivateDeckFactory}
                                onShowAll={onShowAll}
                            />
                        ) : (
                            steps[step].video ? (
                                <VideoStep
                                    dragging={dragging}
                                    video={translateVideo(steps[step].video, locale)}
                                />
                            ) : (
                                <ImageStep
                                    image={translateImage(steps[step].image, locale)}
                                    title={steps[step].title}
                                />
                            )
                        )}
                        {steps[step].trackingPixel && steps[step].trackingPixel}
                    </div>
                    <NextPrevButtons
                        expanded={expanded}
                        isRtl={isRtl}
                        onNextStep={step < steps.length - 1 ? onNextStep : null}
                        onPrevStep={step > 0 ? onPrevStep : null}
                    />
                </div>
            </div>
        </Draggable>
        /* </Box> */
    );
};

Cards.propTypes = {
    activeDeckId: PropTypes.string.isRequired,
    content: PropTypes.shape({
        id: PropTypes.shape({
            name: PropTypes.node.isRequired,
            img: PropTypes.string.isRequired,
            steps: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.node,
                image: PropTypes.string,
                video: PropTypes.string,
                deckIds: PropTypes.arrayOf(PropTypes.string)
            }))
        })
    }),
    dragging: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired,
    isRtl: PropTypes.bool.isRequired,
    locale: PropTypes.string.isRequired,
    onActivateDeckFactory: PropTypes.func.isRequired,
    onCloseCards: PropTypes.func.isRequired,
    onDrag: PropTypes.func,
    onEndDrag: PropTypes.func,
    onNextStep: PropTypes.func.isRequired,
    onPrevStep: PropTypes.func.isRequired,
    onShowAll: PropTypes.func,
    onShrinkExpandCards: PropTypes.func.isRequired,
    onStartDrag: PropTypes.func,
    step: PropTypes.number.isRequired,
    x: PropTypes.number,
    y: PropTypes.number
};

export default Cards;
