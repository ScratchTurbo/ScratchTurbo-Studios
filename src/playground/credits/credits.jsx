import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import appTarget from '../app-target';
import styles from './credits.css';
import { getInitialDarkMode } from '../../lib/tw-theme-hoc.jsx';

// import fosshostLogo from './fosshost-light.png';
import UserData from './users';

/* eslint-disable react/jsx-no-literals */

document.documentElement.lang = 'en';

const User = ({ image, text, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles.user}
    >
        <img
            className={styles.userImage}
            src={image}
            width="60"
            height="60"
        />
        <div className={styles.userInfo}>
            {text}
        </div>
    </a>
);
User.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

const UserList = ({ users }) => (
    <div className={styles.users}>
        {users.map((data, index) => (
            <User
                key={index}
                {...data}
            />
        ))}
    </div>
);
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

const Credits = () => (
    <main className={styles.main}>
        <header className={styles.headerContainer}>
            <h1 className={styles.headerText}>
                ScratchTurbo Credits
            </h1>
        </header>
        <section>
            <h1>ScratchTurbo</h1>
        </section>
        <section>
            <h2>Thank you</h2>
            <p>
            Without TurboWarp and ScratchTurbo, PenguinMod, Snail IDE, Gandi IDE, ScratchTurbo may have never existed.
             Thank you to everyone who worked on Scratch, TurboWarp, PenguinMod? Snail IDE and Gandi IDE 
             you have made many people finally be able to make whatever they can imagine.
            </p>
            <a href="https://scratch.mit.edu/donate">
                Donate to support Scratch.
            </a>
            <br></br><br></br>
            <a href="https://github.com/sponsors/GarboMuffin">
                Donate to support TurboWarp.
            </a>
            <br></br><br></br>
            <a href="https://penguinmod.com/donate">
                Donate to support PenguinMod.
            </a>
            <h2>Contributors</h2>
            <p>
                ScratchTurbo is made by a small bunch of developers.
                A list is below, but you can also check <a href="https://github.com/orgs/ScratchTurbo/people">our GitHub</a> incase this one is out of date.
            </p>
            <UserList users={UserData.emDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
            <p>There are even community members who have helped develop ScratchTurbo. People like <i>you!</i></p>
            <UserList users={UserData.emPullRequestDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>

            <p>
            ♥ Without PenguinMod, ScratchTurbo would never exist, here the PenguinMod Dev Team is listed ♥ A list is below, but you can also check their GitHub incase this one is out of date. But not all devs are listed there.
            </p>
            <UserList users={UserData.pmDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
            <p>There are even community members who have helped develop PenguinMod. People like <i>you!</i></p>
            <UserList users={UserData.pmPullRequestDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
        </section>
        <section>
            <h2>Vercel</h2>
            <p>We currently use <a href="https://replit.com/">Replit</a> to host ScratchTurbo.</p>
            <a href="https://replit.com/">
                <img
                    src="https://play-lh.googleusercontent.com/baV9RL2D0iV8JkTtCzSxeLf6XxCJMWQYbyXMqyQfc0OQGtjkCyUenUbLb5tefYfMxfU"
                    width="160"
                    height="160"
                />
            </a>
            {/* <h2>Domain Provider</h2>
            <p>
                <a href="https://penguinmod.com">penguinmod.com</a> (and any subdomains) are currently
                provided by <a href="https://github.com/enderhacker">NotHouse</a>.
                <br></br>
                <a href="https://github.com/enderhacker">
                    <img src="https://avatars.githubusercontent.com/u/61245488?v=4" style={{ width: "128px" }}></img>
                </a>
            </p>
            */}
            <h2>Server Host</h2>
            <p>
                ScratchTurbo's Project Sharing server is currently hosted by <a href="https://scratchturbo.replit.app/profile?user=ElevadorPro3">ElevadorPro3</a>.
                <br></br>
                <a href="https://scratchturbo.replit.app/profile?user=MubiLop">
                    <img src="https://trampoline.turbowarp.org/avatars/by-username/MubiLop" style={{ width: "128px" }}></img>
                </a>
            </p>
            <p>
                The PenguinMod Server API is maintained by many people.
                A list is below, but you can also check <a href="https://github.com/ScratchTurbo/ScratchTurbo-API/graphs/contributors">the GitHub repository</a> incase this one is out of date.
            </p>
            <UserList users={UserData.pmApiDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
            
            <h2>Sound Effects</h2>
            <p>
                PenguinMod (not ScratchTurbo) has added some more sounds to the Sound Library.
                All PenguinMod sounds are
                from <a href="https://freesound.org/">https://freesound.org/</a> and <a href="https://archive.org/">https://archive.org/</a> under
                Public Domain licenses.
            </p>
            <h2>Accounts</h2>
            <p>
                Login is managed
                by <a href="https://auth.itinerary.eu.org/">Scratch Auth</a> created
                by <a href="https://scratch.mit.edu/users/Looky1173/">Looky1173</a>.
                (thanks for adding us to the user list!)
                <br />
                <br />
                <i>
                    "Scratch Auth" is not actually affiliated with Scratch,
                    the Scratch Team, or the Scratch Foundation.
                </i>
                <br />
                <br />
                <i>
                    ScratchTurbo is also not owned or managed by Looky1173, please only comment on his profile
                    <br />
                    if the Scratch Auth page tells you that it failed, not if PenguinMod fails to load.
                </i>
            </p>
        </section>
        <section>
            <h1>ScratchTurbo, PenguinMod & TurboWarp</h1>
        </section>
        <section>
            <h2>Extensions</h2>
            <p><i>
                If you are an extension developer who wants their extension removed from ScratchTurbo's extensions list,
                contact us as soon as you can. We'll get it removed as soon as we are able to.
            </i></p>
            <p>
                We use some MIT licensed extensions from TurboWarp as they are really useful!
                Check out the full list of TurboWarp extensions <a href="https://extensions.turbowarp.org/">here</a>,
                but we still need to credit these people!
                Check them out below:
            </p>
            <UserList users={UserData.extensionDevelopers} />
            <UserList users={UserData.pmExtensionDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
            <p>
                ScratchTurbo also has a few people who made and submitted extensions too!
                This list may get outdated sometimes, but here they are listed below:
            </p>
            <UserList users={UserData.emExtensionDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
        </section>
        <section>
            <h2>Addons</h2>
            <p>
                Addons are mostly taken from <a href="https://scratchaddons.com/">Scratch Addons</a>,
                but we hope to have some PenguinMod addons in the future.
                Here are the developers that made the current addons available.
            </p>
            <UserList users={UserData.addonDevelopers} />
            <p><i>The list order is randomized on each refresh.</i></p>
        </section>
        <section>
            <h1>TurboWarp</h1>
        </section>
        <section>
            <p>
                The TurboWarp project is made possible by the work of many volunteers.
                <br></br>
                You can check out TurboWarp's individual credits <a href="https://turbowarp.org/credits.html">here</a>.
                <br></br>
                <a href="https://github.com/sponsors/GarboMuffin">
                    Donate to support TurboWarp.
                </a>
            </p>
        </section>
        {/* RIP Fosshost */}
        {/* <section>
            <h2>Fosshost</h2>
            <p>
                The TurboWarp project is proudly hosted by <a href="https://fosshost.org/">Fosshost</a> who provide free computing resources to the open source community.
            </p>
            <p>
                <a href="https://fosshost.org/donate">
                    Donate to support Fosshost.
                </a>
            </p>
            <a href="https://fosshost.org/">
                <img
                    src={fosshostLogo}
                    width="250"
                    height="125"
                />
            </a>
        </section> */}
        <section>
            <h2>Scratch</h2>
            <p>
                TurboWarp is based on the work of the <a href="https://scratch.mit.edu/credits">Scratch contributors</a> but is not endorsed by Scratch in any way.
            </p>
            <p>
                <a href="https://scratch.mit.edu/donate">
                    Donate to support Scratch.
                </a>
            </p>
        </section>
        <section>
            <h2>Translators</h2>
            <p>
                More than 100 people have helped translate TurboWarp and its addons into many languages —
                far more than we could hope to list here.
            </p>
            <p>
                PenguinMod is also (very very slowly) getting translated into other languages, in the future
                hopefully the same number of languages can be supported. It'll take a while until we get there though.
            </p>
            <p>Contributors:</p>
            <UserList users={UserData.pmTranslators} />
            <p><i>The list order is randomized on each refresh.</i></p>
        </section>
        <section>
            <p>
                <i>
                    Individual contributors are listed in no particular order.
                    The order is randomized each visit.
                </i>
            </p>
        </section>
    </main>
);

document.body.setAttribute('theme', getInitialDarkMode() ? 'dark' : 'light');

ReactDOM.render((
    <Credits />
), appTarget);
