# Changelog for Smile's Shopify Extensions

This document tracks notable modifications to the extensions contained within this repository, following the structure inspired by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Each version is accompanied with a release date and [sub-sections](https://keepachangelog.com/en/1.1.0/#how) with PR links to describe the changes.

All changes to the extensions must be initially added as a new `Unpublished` section at the top of this file, and using appropriate [sub-sections](https://keepachangelog.com/en/1.1.0/#how) to describe the changes. Before merging the PR, update the `Unpublished` heading with the corresponding version number and date.


## v190 - 2025-07-23

### Changed

- Dependency update [#784](https://github.com/smile-io/smile-shopify-app-extensions/pull/784)


## Unpublished

### Changed

- Dependency update [#931](https://github.com/smile-io/smile-shopify-app-extensions/pull/931)

## v190 - 2025-07-23

### Changed

- Dependency update [#784](https://github.com/smile-io/smile-shopify-app-extensions/pull/784)

## v189 - 2025-07-22

### Changed

- [Customer account page] changed vip tier status badge display logic [#925](https://github.com/smile-io/smile-shopify-app-extensions/pull/925)

## v188 - 2025-07-22

### Changed

- Dependency update [#776](https://github.com/smile-io/smile-shopify-app-extensions/pull/776)

### Fixed

- Security vulnerability fix [#930](https://github.com/smile-io/smile-shopify-app-extensions/pull/930)

## v187 - 2025-07-21

### Added

- [Customer account page] Added referrals reward program section 🚀 [#919](https://github.com/smile-io/smile-shopify-app-extensions/pull/919)
- [Customer account page] Added support for VIP 🚀 [#923](https://github.com/smile-io/smile-shopify-app-extensions/pull/923)

### Fixed

- [Customer account page] Fixed bug where we were showing the wrong content for excluded customers [#928](https://github.com/smile-io/smile-shopify-app-extensions/pull/927)

## v186 - 2025-07-16

### Changed

- [POS extension] Handle excluded customers [#899](https://github.com/smile-io/smile-shopify-app-extensions/pull/899)

## v185 - 2025-07-09

### Fixed

- [Customer account page] Fixed unauthorized errors on API calls [#896](https://github.com/smile-io/smile-shopify-app-extensions/pull/896)

### Added

- Add a specific Smile Client for the CAP & Redeem Points extensions when sending requests [#894](https://github.com/smile-io/smile-shopify-app-extensions/pull/894)

## v184 - 2025-07-08

### Added

- [Customer account page] Added API request error handler [#893](https://github.com/smile-io/smile-shopify-app-extensions/pull/893)
- [Customer account page] Added optimistic-ish feedback for async completion customer activity rules [#886](https://github.com/smile-io/smile-shopify-app-extensions/pull/886)

### Improved

- [Customer account page] Improved points activity component design for smaller desktops, tablet and mobile screens [#887](https://github.com/smile-io/smile-shopify-app-extensions/pull/887)

## v183 - 2025-07-03

### Fix

- [Customer account page] Stubs redemption action on theme editor [#882](https://github.com/smile-io/smile-shopify-app-extensions/pull/882)

## v182 - 2025-07-02

### Added

- [Customer account page] Added new full-page loyalty extension for customer account surface 🚀 [#880](https://github.com/smile-io/smile-shopify-app-extensions/pull/880)

## v181 - 2025-06-06

### Fixed

- Prevent multiple customer identification API calls from a single extension [#821](https://github.com/smile-io/smile-shopify-app-extensions/pull/821)

## v180 - 2025-05-15

No changes.

## v179 - 2025-05-13

### Changed

- Internal overhaul of how we define our data structure for ways customers can earn points [#598](https://github.com/smile-io/smile-shopify-app-extensions/pull/598)
- Preparation for supporting different ways for customers to earn points besides placing orders [#773](https://github.com/smile-io/smile-shopify-app-extensions/pull/773)

## v178 - 2025-05-08

### Changed

- Dependency update [#769](https://github.com/smile-io/smile-shopify-app-extensions/pull/769)

## v177 - 2025-05-06

### Fixed

- **[Points on Account/Product Page]** app blocks: prevent loading state from remaining visible indefinitely for excluded customers [#767](https://github.com/smile-io/smile-shopify-app-extensions/pull/767)

## v176 - 2025-04-25

### Changed

- Updated icon URLs [#760](https://github.com/smile-io/smile-shopify-app-extensions/pull/760)

## v175 - 2025-04-22

### Changed

- Improve error messages for points estimate extension [#750](https://github.com/smile-io/smile-shopify-app-extensions/pull/747)

## v174 - 2025-04-22

### Changed

- Update endpoints to call their own API-namespace [#750](https://github.com/smile-io/smile-shopify-app-extensions/pull/750)

## v173 - 2025-03-28

### Changed

- Minor dependency updates [#731](https://github.com/smile-io/smile-shopify-app-extensions/pull/731)

## v172 - 2025-03-26

### Changed

- Security updates [#727](https://github.com/smile-io/smile-shopify-app-extensions/pull/727)

## v171 - 2025-03-24

### Changed

- Big internal code restructure to the way code that consumes Shopify's UI extension packages is shared between extensions [#725](https://github.com/smile-io/smile-shopify-app-extensions/pull/725)
- Update Shopify dependencies and API versions to 2025-01 [#726](https://github.com/smile-io/smile-shopify-app-extensions/pull/726)

## v170 - 2025-03-12

### Changed

- **[POS extension]** Use more descriptive title for discounts applied to cart via extension [#713](https://github.com/smile-io/smile-shopify-app-extensions/pull/713)

## v169 - 2025-03-12

### Changed

- Internal improvements to types relating to program data returned by API [#712](https://github.com/smile-io/smile-shopify-app-extensions/pull/712)

## v168 - 2025-03-10

### Changed

- **[POS extension]** Internal reorganisation relating to checking for applied discounts [#710](https://github.com/smile-io/smile-shopify-app-extensions/pull/710)

## v167 - 2025-03-07

### Changed

- **[POS extension]** Stop blocking redemption options when there are discounts already applied to the cart. [#709](https://github.com/smile-io/smile-shopify-app-extensions/pull/709)

## v166 - 2025-03-07

### Changed

- **[POS extension]** Ignore discount codes when checking if a discount is already applied to the cart [#708](https://github.com/smile-io/smile-shopify-app-extensions/pull/708)

## v165 - 2025-02-25

### Changed

- Internal reorganisation relating to data transforms [#705](https://github.com/smile-io/smile-shopify-app-extensions/pull/705)
- External dependency updates [#594](https://github.com/smile-io/smile-shopify-app-extensions/pull/594)

## v164 - 2025-02-21

### Fixed

- **[Loyalty Landing Page]** Prevent variables in shared script loader colliding with already-declared variables of the same name [#703](https://github.com/smile-io/smile-shopify-app-extensions/pull/703)

## v163 - 2025-02-19

### Changed

- **[POS extension]** Avoid exposing Smile data via cart properties [#702](https://github.com/smile-io/smile-shopify-app-extensions/pull/702)

## v162 - 2025-02-13

### Fixed

- **[POS extension]** Prevent accidentally leaving internal data in cart properties [#701](https://github.com/smile-io/smile-shopify-app-extensions/pull/701)

## v161 - 2025-02-10

### Added

- **[POS extension]** Add initial version of Smile's loyalty program POS UI extension [#699](https://github.com/smile-io/smile-shopify-app-extensions/pull/699)

### Changed

- Internal code and data structure updates and patch update for Shopify UI extension packages [#699](https://github.com/smile-io/smile-shopify-app-extensions/pull/699)

## v160 - 2025-02-08

### Changed

- **[Order index page extension]** Use stable Shopify API version [#698](https://github.com/smile-io/smile-shopify-app-extensions/pull/698)

## v159 - 2025-01-09

Release triggered by internal documentation changes – no code changes associated with this version.

## v158 - 2025-01-09

### Changed

- Dependency update [#623](https://github.com/smile-io/smile-shopify-app-extensions/pull/623)

## v157 - 2024-12-18

Not sure what was in this release since it seems to have been made manually via the Shopify partners portal, without any code changes associated with it.

## v156 - 2024-12-17

### Changed

- **[OSP/TYP checkout extension]** Remove links from extension [#625](https://github.com/smile-io/smile-shopify-app-extensions/pull/625)

## v155 - 2024-12-16

### Changed

- **[Redeem points extension]** Internal refactor of how code to exchange points for a discount coupon is used. [#621](https://github.com/smile-io/smile-shopify-app-extensions/pull/621)

## v154 - 2024-12-10

### Changed

- Share points value formatting across all extensions. [#608](https://github.com/smile-io/smile-shopify-app-extensions/pull/608)

## v153 - 2024-12-09

### Changed

- No code changes deployed. [#599](https://github.com/smile-io/smile-shopify-app-extensions/pull/599)

## v152 - 2024-12-09

### Changed

- Dependency update. [#589](https://github.com/smile-io/smile-shopify-app-extensions/pull/589)

## v151 - 2024-11-22

### Changed

- **[OSP/TYP checkout extension]** Fix signIn and create account URL [#591](https://github.com/smile-io/smile-shopify-app-extensions/pull/591)

## v150 - 2024-11-20

- Dependencies update. [#583](https://github.com/smile-io/smile-shopify-app-extensions/pull/583)

## v149 - 2024-10-23

### Added

- **[Order Index Page]** add default placement when adding extension to page. [#584](https://github.com/smile-io/smile-shopify-app-extensions/pull/584)

## v148 - 2024-10-23

### Added

- Added a extensions collection in the editor that groups all the checkout & customer account extensions. [#586](https://github.com/smile-io/smile-shopify-app-extensions/pull/586)

## v147 - 2024-10-23

### Changed

- **[Order Index Page]** Update the OIP extension to use stable version of Shopify packages.

## v146 - 2024-10-22

- Dependencies update. [#573](https://github.com/smile-io/smile-shopify-app-extensions/pull/573)

## v145 - 2024-10-17

### Changed

- Apply some code structure improvements suggested from a previous code review. [#578](https://github.com/smile-io/smile-shopify-app-extensions/pull/578)

## v144 - 2024-10-10

### Added

- **[Points on Account Page]** allow merchants to preview different scenarios in the Shopify theme editor. [#558](https://github.com/smile-io/smile-shopify-app-extensions/pull/558)
- **[Points on Account Page]** allow merchants to control the visibility of points label in body text. [#559](https://github.com/smile-io/smile-shopify-app-extensions/pull/559)
- **[Points on Account Page]** add body text customization. [#560](https://github.com/smile-io/smile-shopify-app-extensions/pull/560)
- **[Points on Account Page]** allow merchants to customize button text. [#563](https://github.com/smile-io/smile-shopify-app-extensions/pull/563)
- **[Points on Product Page]** Made earning rate dynamic based on the program configuration. [#566](https://github.com/smile-io/smile-shopify-app-extensions/pull/566)
- **[Points on Product Page]** Added the ability for Merchants to edit logged-in and logged-out texts including points variables, toggle between logged-in states and hide the points label. [#553](https://github.com/smile-io/smile-shopify-app-extensions/pull/553)
- **[Points on Product Page]** Improved the logic of showing the points amount when running campaigns. [#576](https://github.com/smile-io/smile-shopify-app-extensions/pull/576)
- **[Points on Product Page]** Fix logic for showing logged-in/-out states. [#578](https://github.com/smile-io/smile-shopify-app-extensions/pull/578)
- **[Points on Product Page]** Change the preview scenario options in the Shopify Editor to better describe the states in a way that makes sense regardless of the store or program settings. [#579](https://github.com/smile-io/smile-shopify-app-extensions/pull/579)

- ### Removed

- **[Points on Product Page]** Removed unnecessary internal implementation after making the earning rate dynamic. [#567](https://github.com/smile-io/smile-shopify-app-extensions/pull/567)

## v143 - 2024-10-07

### Changed

- **[Points on Account Page]** internal reorganisation of code responsible for rendering the app block. [#568](https://github.com/smile-io/smile-shopify-app-extensions/pull/568)

## v142 - 2024-10-03

### Added

- **[Points on Account Page]** add a utility that can inject variable into a string. [#554](https://github.com/smile-io/smile-shopify-app-extensions/pull/554)

### Changed

- Update dependencies. [565](https://github.com/smile-io/smile-shopify-app-extensions/pull/565)

## v141 - 2024-09-24

### Changed

- Update dependencies. [#521](https://github.com/smile-io/smile-shopify-app-extensions/pull/521)

## v140 - 2024-09-24

### Changed

- **[Points on Account Page]** app block: code clean-up after removing the welcome state. [#549](https://github.com/smile-io/smile-shopify-app-extensions/pull/549)

## v139 - 2024-09-24

### Changed

- **[Points on Account Page]** app block: Removed welcome state to simplify the app block. [#548](https://github.com/smile-io/smile-shopify-app-extensions/pull/548)

## v138 - 2024-09-17

### Changed

- **[Points on Account Page]** app block: internal reorganisation of data retrieval code. [#542](https://github.com/smile-io/smile-shopify-app-extensions/pull/542)
- **[Points on Account Page]** app block: internal reorganisation of preview data generation in theme editor. [#545](https://github.com/smile-io/smile-shopify-app-extensions/pull/545)

## v137 - 2024-09-13

### Fixed

- Add points value flooring for the shared utility that is used to estimate earnable point value. [#544](https://github.com/smile-io/smile-shopify-app-extensions/pull/544)

## v136 - 2024-09-13

### Added

- Add a shared utility that is used to estimate earnable point value in extensions. [#529](https://github.com/smile-io/smile-shopify-app-extensions/pull/529)

## v135 - 2024-09-12

### Changed

- Update the `Points on account page` app block to replace the exclamation mark "!" with a period "." in the text when not having enough points to redeem. [#537](https://github.com/smile-io/smile-shopify-app-extensions/pull/537)

## v134 - 2024-09-11

## Added

- Add a shared utility that helps filter bonus campaign by conditions. [#533](https://github.com/smile-io/smile-shopify-app-extensions/pull/533)

## Changed

- Use the shared utility to filter bonus campaigns in "Show points customer will earn" extension and "Points on Product Page" app block. [#540](https://github.com/smile-io/smile-shopify-app-extensions/pull/540)

## v133 - 2024-09-10

### Changed

- **[Loyalty Landing Page]**: tweak label for the button text input in the theme editor for the earning and redeeming highlight app blocks, and add help text for the same inputs. [#536](https://github.com/smile-io/smile-shopify-app-extensions/pull/536)

## v132 - 2024-09-10

### Added

- **[Points on Product Page]** app block: show bonus points information when there is a running points bonus campaign. [#532](https://github.com/smile-io/smile-shopify-app-extensions/pull/532)
- **[Points on Product Page]** app block: avoid showing bonus points information when points bonus campaign has ended. [#534](https://github.com/smile-io/smile-shopify-app-extensions/pull/534)

## v131 - 2024-09-09

### Added

- Show a banner to the Merchant on the `Points on product page` app block and hide the app block from the store front for the customer when a product is excluded from earning points. [#530](https://github.com/smile-io/smile-shopify-app-extensions/pull/530)

## v130 - 2024-09-06

### Changed

- **[Points on Product Page]** app block. Ask for a non-cached init response from the API when in the Shopify Editor. ([#531](https://github.com/smile-io/smile-shopify-app-extensions/pull/531))

## v129 - 2024-09-06

### Added

- **[Show points customer will earn extension]** Show bonus points information when there is a running points bonus campaign. [#520](https://github.com/smile-io/smile-shopify-app-extensions/pull/520)

## v128 - 2024-09-06

### Changed

- Changed the API host from api.smile.io to platform.smile.io to allow us to make use of CloudFront cache ([#527](https://github.com/smile-io/smile-shopify-app-extensions/pull/527))

## v127 - 2024-09-06

### Changed

- Modify the `Points on product page` app block to fetch data from a different endpoint. [#522](https://github.com/smile-io/smile-shopify-app-extensions/pull/522)

## v126 - 2024-09-05

### Added

- Added A11y descriptions to the CTA and Stepper in the PRC extension. [#526](https://github.com/smile-io/smile-shopify-app-extensions/pull/526)

## v125 - 2024-09-05

### Changed

- **[Redeem points extension]** Internal refactor of reward selection logic to support accounts with multiple incremental rewards. [#523](https://github.com/smile-io/smile-shopify-app-extensions/pull/523)
- **[Redeem points extension]** Allow extension to be shown when store has no fixed rewards and multiple incremental rewards. [#524](https://github.com/smile-io/smile-shopify-app-extensions/pull/524)

## v124 - 2024-08-29

### Changed

- Improving some naming in code and a small function call optimization that weren't addressed in previous PR reviews. [#519](https://github.com/smile-io/smile-shopify-app-extensions/pull/519)
- Renamed a module that is used to calculate incremental rewards redemption limits (minimum points amount, maximum points amount etc). [#518](https://github.com/smile-io/smile-shopify-app-extensions/pull/518)
- Update dependencies [#515](https://github.com/smile-io/smile-shopify-app-extensions/pull/515)

## v123 - 2024-08-28

### Fixed

- **[Redeem points extension]** Prevent showing loading state after redeeming a reward. [#517](https://github.com/smile-io/smile-shopify-app-extensions/pull/517)

## v122 - 2024-08-28

### Fixed

- Update `micromatch` dependency to fix vulnerability. [#514](https://github.com/smile-ui/smile-shopify-app-extensions/pull/514)

## v121 - 2024-08-28

### Changed

- **[Redeem points extension]** Display error message to user when purchasing an incremental reward fails. [#513](https://github.com/smile-io/smile-shopify-app-extensions/pull/513)

### Fixed

- **[Redeem points extension]** Fix logic so that having multiple active incremental redeeming options is only considered "unsupported program configuration" when no fixed redeeming options are available. [#512](https://github.com/smile-io/smile-shopify-app-extensions/pull/512)

## v120 - 2024-08-27

### Added

- Dependencies update. [#506](https://github.com/smile-io/smile-shopify-app-extensions/pull/506)

## v119 - 2024-08-26

### Added

- **[Redeem points extension]** Added logic to correct users inputting invalid points amount when redeeming incremental rewards. [#502](https://github.com/smile-io/smile-shopify-app-extensions/pull/502)
- **[Redeem points extension]** Extract the points redemption button to be a individual module. [#510](https://github.com/smile-io/smile-shopify-app-extensions/pull/510)
- **[Redeem points extension]** Add a new button to handle user's manual input when redeeming incremental rewards. [#511](https://github.com/smile-io/smile-shopify-app-extensions/pull/511)

## v118 - 2024-08-21

### Changed

- **[Redeem points extension]** Tweaks to post-redemption state for incremental rewards. [#508](https://github.com/smile-io/smile-shopify-app-extensions/pull/508)

## v117 - 2024-08-21

### Fixed

- **[Redeem points extension]** Fix missing button text when we cannot determine if the shopper can afford an incremental reward [#507](https://github.com/smile-io/smile-shopify-app-extensions/pull/507)

### Changed

- **[Redeem points extension]** Implement purchasing of incremental rewards [#505](https://github.com/smile-io/smile-shopify-app-extensions/pull/505)

## v116 - 2024-08-19

### Changed

- **[Order Index Page]** Replace requests to the PoCP init endpoint with the new OIP init endpoint. [#504](https://github.com/smile-io/smile-shopify-app-extensions/pull/504)

## v115 - 2024-08-19

### Changed

- **[Order Index Page]** Update references of PoCP (Points on Customer Profile) to OIP (Order Index Page). [#503](https://github.com/smile-io/smile-shopify-app-extensions/pull/503)

## v114 - 2024-08-19

### Changed

- **[Redeem points extension]** Show dynamic reward value when redeeming incremental rewards [#501](https://github.com/smile-io/smile-shopify-app-extensions/pull/501)

## v113 - 2024-08-16

### Changed

- Update dependencies [#481](https://github.com/smile-io/smile-shopify-app-extensions/pull/481)

## v112 - 2024-08-15

### Added

- Add ability to edit "Join now", "Log in" and "Discover program" buttons along with with "Logged in preview" checkbox to see the correct state in the Theme Editor for the LLP "Header" app block. [#500](https://github.com/smile-io/smile-shopify-app-extensions/pull/500)
- Added ability to edit "Heading" and "Description" for Step 1, Step 2 and Step 3 of the "How it works" app block. [#495](https://github.com/smile-io/smile-shopify-app-extensions/pull/495)

## v111 - 2024-08-14

### Changed

- **[Redeem points extension]** Calculate minimum, maximum, and points step for customers redeeming incremental rewards [#498](https://github.com/smile-io/smile-shopify-app-extensions/pull/498)
- **[Redeem points extension]** Wire up choosing of points amount to spend when redeeming incremental rewards [#499](https://github.com/smile-io/smile-shopify-app-extensions/pull/499)

## v109 - 2024-08-12

### Changed

- Updated dependencies used in development workflows [#460](https://github.com/smile-io/smile-shopify-app-extensions/pull/460)

## v108 - 2024-08-12

### Changed

- **[Redeem points extension]** Implement "customer cannot afford reward" state for variable rewards [#490](https://github.com/smile-io/smile-shopify-app-extensions/pull/490)
- **[Redeem points extension]** Move logic for variable points stepper into wrapper component [#489](https://github.com/smile-io/smile-shopify-app-extensions/pull/489)
- **[Redeem points extension]** Extracted user inputs into a form component [#488](https://github.com/smile-io/smile-shopify-app-extensions/pull/488)
- **[Redeem points extension]** Show customer's points balance when they can afford a variable points product [#494](https://github.com/smile-io/smile-shopify-app-extensions/pull/494)

### Fixed

- **[Redeem points extension]** Fix logged-out copy for variable rewards [#493](https://github.com/smile-io/smile-shopify-app-extensions/pull/493)

## v107 - 2024-08-09

### Changed

- **[Points on Customer Profile]** Update the extension's name in the Shopify editor. [#496](https://github.com/smile-io/smile-shopify-app-extensions/pull/496)
- **[Points on Customer Profile]** Update the extension's target to be in the order page. [#496](https://github.com/smile-io/smile-shopify-app-extensions/pull/496)

## v106 - 2024-08-09

### Changed

- Replace deprecated `node-sass` style compiler with `sass`. [#492](https://github.com/smile-io/smile-shopify-app-extensions/pull/492).

## v105 - 2024-08-08

### Added

- **[Points on Customer Profile]** Publish the new Points on Customer Profile extension. [#486](https://github.com/smile-io/smile-shopify-app-extensions/pull/486).

## v104 - 2024-08-07

### Added

- Add ability to edit the "Ways to redeem" button on the "Redeeming highlight" app block [#485](https://github.com/smile-io/smile-shopify-app-extensions/pull/485)

## v103 - 2024-08-06

### Added

- **[Redeem points extension]** Updated PRC's Unsupported Settings Banner to display more meaningful messages [#480](https://github.com/smile-io/smile-shopify-app-extensions/pull/480)
- **[Redeem points extension]** Refactored the Unsupported Settings Banner to allow for more meaningful messages [#478](https://github.com/smile-io/smile-shopify-app-extensions/pull/478)

## v102 - 2024-08-06

### Added

- Add ability to edit the "Ways to earn" button on the "Earning highlight" app block [#468](https://github.com/smile-io/smile-shopify-app-extensions/pull/483)

## v101 - 2024-07-31

### Added

- **[Redeem points extension]** Add skeleton implementation of the stepper to redeem variable rewards. [#468](https://github.com/smile-io/smile-shopify-app-extensions/pull/468)

## v100 - 2024-07-30

### Changed

- Rename LLP blocks Points earning -> Earning highlight and Rewards -> Redeeming highlight [#479](https://github.com/smile-io/smile-shopify-app-extensions/pull/479)

## v97 - 2024-07-26

### Added

- **[Redeem points extension]** Add a shared utility function to help select a default redeeming option for the shopper. [#476](https://github.com/smile-io/smile-shopify-app-extensions/pull/476)

## v96 - 2024-07-24

### Changed

- Dependencies update. [#477](https://github.com/smile-io/smile-shopify-app-extensions/pull/477).

### Added

- **[Redeem points extension]** Add a basic version of the stepper that can be used to redeem variable rewards. [#472](https://github.com/smile-io/smile-shopify-app-extensions/pull/472)
- **[Redeem points extension]** Make V2 feature rollout flag avaiable in the extensions. [#472](https://github.com/smile-io/smile-shopify-app-extensions/pull/472)

## v95 - 2024-07-19

### Changed

- Dependencies update. [#470](https://github.com/smile-io/smile-shopify-app-extensions/pull/470).

## v94 - 2024-07-18

### Changed

- Add identifier to app block initialisation script elements. [#453](https://github.com/smile-io/smile-shopify-app-extensions/pull/453).

## v93 - 2024-07-16

### Changed

- Dependencies update. [#458](https://github.com/smile-io/smile-shopify-app-extensions/pull/458).

## v92 - 2024-07-16

### Changed

- Extracted data retrieval routines from PoPP app block's initialisation script. [461](https://github.com/smile-io/smile-shopify-app-extensions/pull/461).
- Extracted PoPP app block's initial props computation into standalone utility. [463](https://github.com/smile-io/smile-shopify-app-extensions/pull/463).
- Extracted PoPP app block's variant selection handling into separate utility. [464](https://github.com/smile-io/smile-shopify-app-extensions/pull/464).
- Extracted PoPP app block's main initialisation routine into a utility. [465](https://github.com/smile-io/smile-shopify-app-extensions/pull/465).

## v91 - 2024-07-11

### Added

- **[Redeem points extension]** Redirect shoppers back to the checkout page after successfully logging in through the extension's login link. [#462](https://github.com/smile-io/smile-shopify-app-extensions/pull/462)

## v90 - 2024-07-09

### Changed

- Update PoAP welcome text to be less dynamic [#457](https://github.com/smile-io/smile-shopify-app-extensions/pull/457).

## v89 - 2024-07-09

### Changed

- Refactored the way the PoPP app block detects history changes. [455](https://github.com/smile-io/smile-shopify-app-extensions/pull/455).
- Extracted the PoPP app block's currency parsing to an external utility. [456](https://github.com/smile-io/smile-shopify-app-extensions/pull/456).

## v88 - 2024-06-27

### Changed

- Dependencies update. [#440](https://github.com/smile-io/smile-shopify-app-extensions/pull/440).

## v87 - 2024-06-26

### Changed

- Convert PoPP & PoAP init scripts to TypeScript. [#426](https://github.com/smile-io/smile-shopify-app-extensions/pull/426).

## v86 - 2024-06-21

### Changed

- Update dependencies. [#432](https://github.com/smile-io/smile-shopify-app-extensions/pull/432).

## v85 - 2024-06-19

### Fixed

- Fixed a rendering issue in PoAP when shopper has no point. [#435](https://github.com/smile-io/smile-shopify-app-extensions/pull/435).

## v84 - 2024-06-18

### Changed

- Adjusted configs to allow for preact/app block unit tests [#430](https://github.com/smile-io/smile-shopify-app-extensions/pull/430).

## v83 - 2024-06-18

### Changed

- Update dependencies. [#425](https://github.com/smile-io/smile-shopify-app-extensions/pull/425)

## v82 - 2024-06-18

### Changed

- Update `ws` to patch security vulnerability. [#431](https://github.com/smile-io/smile-shopify-app-extensions/pull/431)

## v81 - 2024-06-17

### Changed

- Replaced the third-party `camelcaseKeys` function with a in-house `camelcaseKeys` implementation. [#428](https://github.com/smile-io/smile-shopify-app-extensions/pull/428)

## v80 - 2024-06-10

### Changed

- Improved loading state of all app blocks by changing the way we inject variables [#424](https://github.com/smile-io/smile-shopify-app-extensions/pull/424).

## v79 - 2024-06-10

### Changed

- Convert PoPP & PoAP app blocks' render scripts into TypeScript. [#422](https://github.com/smile-io/smile-shopify-app-extensions/pull/422).

## v78 - 2024-06-07

### Changed

- Convert LLP app blocks' render scripts into TypeScript. [#418](https://github.com/smile-io/smile-shopify-app-extensions/pull/418).

## v77 - 2024-06-07

### Changed

- Convert PoAP app block to use TS. [#419](https://github.com/smile-io/smile-shopify-app-extensions/pull/419).
- Convert PoPP app block to use TS. [#415](https://github.com/smile-io/smile-shopify-app-extensions/pull/415).

## v76 - 2024-06-06

### Changed

- Update dependencies. [#417](https://github.com/smile-io/smile-shopify-app-extensions/pull/417).

## v75 - 2024-06-06

### Changed

- Convert LLP header app block into TypeScript. [#411](https://github.com/smile-io/smile-shopify-app-extensions/pull/411).
- DRY up LLP app blocks' init scripts. [#413](https://github.com/smile-io/smile-shopify-app-extensions/pull/413).
- Fix PoPP & PoAP build errors. [#420](https://github.com/smile-io/smile-shopify-app-extensions/pull/420).

## v74 - 2024-06-05

### Changed

- Convert How it works app block to use TS. [#414](https://github.com/smile-io/smile-shopify-app-extensions/pull/414).

## v73 - 2024-06-03

### Changed

- Convert redeeming rule highlight app block to use TS. [#412](https://github.com/smile-io/smile-shopify-app-extensions/pull/412).
- Convert earning rule highlight app block to use TS. [#410](https://github.com/smile-io/smile-shopify-app-extensions/pull/410).

## v72 - 2024-05-29

### Changed

- Update dependencies. [#409](https://github.com/smile-io/smile-shopify-app-extensions/pull/409).

## v71 - 2024-05-28

### Fixed

- Prevent app block contents from being appended alongside their skeleton loading states when their loaded content differs significantly from the loading state. [#408](https://github.com/smile-io/smile-shopify-app-extensions/pull/408).

## v70 - 2024-05-23

### Changed

- Update dependencies. [#406](https://github.com/smile-io/smile-shopify-app-extensions/pull/406).

## v69 - 2024-05-13

### Fixed

- Fixed parsing error when using a single quote in merchant-customisable text. [#398](https://github.com/smile-io/smile-shopify-app-extensions/pull/398).

## v68 - 2024-05-09

### Changed

- Extracted app block initialisation code into standalone script files. [#391](https://github.com/smile-io/smile-shopify-app-extensions/pull/391).

### Fixed

- Fix `undefined` source on landing page "Header" app block background image and PoAP/PoPP app blocks using incorrect API URLs. [#393](https://github.com/smile-io/smile-shopify-app-extensions/pull/393).

## v67 - 2024-05-08

### Changed

- Moved app block render scripts into new subdirectories. [#390](https://github.com/smile-io/smile-shopify-app-extensions/pull/390).

## v66 - 2024-04-29

### Changed

- Dependencies update. [#356](https://github.com/smile-io/smile-shopify-app-extensions/pull/356).

## v65 - 2024-04-23

### Changed

- Upgrade Show points customer will earn extension to new Shopify API & package versions. [#354](https://github.com/smile-io/smile-shopify-app-extensions/pull/354).
- Upgrade Redeem Points extension to new Shopify API & package versions. [#358](https://github.com/smile-io/smile-shopify-app-extensions/pull/358)
- Upgrade TYP & OSP extensions to new Shopify API & package versions. [#359](https://github.com/smile-io/smile-shopify-app-extensions/pull/359).
- Update Redeem Points checkout extension to use Shopify hooks context. [#365](https://github.com/smile-io/smile-shopify-app-extensions/pull/365)

### Removed

- Remove deprecated `@shopify/checkout-ui-extensions-react` package. [#365](https://github.com/smile-io/smile-shopify-app-extensions/pull/365)

## v64 - 2024-04-23

### Added

- Show an immediately-rendered loading state for "Points on Product Page" app block. [#381](https://github.com/smile-io/smile-shopify-app-extensions/pull/381).
- Show an immediately-rendered loading state for "Points on Account Page" app block. [#383](https://github.com/smile-io/smile-shopify-app-extensions/pull/383).

## v63 - 2024-04-22

### Fixed

- Fix bug where we were showing "0" when the customer didn't have any points balance in the OSP extension. (#380)[https://github.com/smile-io/smile-shopify-app-extensions/pull/380]

## v62 - 2024-04-22

### Changed

Update the `@shopify/cli` package. [#379](https://github.com/smile-io/smile-shopify-app-extensions/pull/379)

## v61 - 2024-04-18

### Changed

- Preload landing page "Header" app block background image. [#375](https://github.com/smile-io/smile-shopify-app-extensions/pull/375)

## v60 - 2024-04-17

### Added

- Show an immediately-rendered loading state for landing page earning rules app block. [#366](https://github.com/smile-io/smile-shopify-app-extensions/pull/366).

## v59 - 2024-04-17

### Added

- Show an immediately-rendered loading state for landing page "Rewards" app block. [#368](https://github.com/smile-io/smile-shopify-app-extensions/pull/368).
- Show an immediately-rendered loading state for landing page "How it works" app block. [#369](https://github.com/smile-io/smile-shopify-app-extensions/pull/369).

## v58 - 2024-04-16

### Added

- Show an immediately-rendered loading state for landing page "Header" app block. [#307](https://github.com/smile-io/smile-shopify-app-extensions/pull/307), [#310](https://github.com/smile-io/smile-shopify-app-extensions/pull/310).

## v57 - 2024-04-16

### Changed

- dependabot security update. [#364](https://github.com/smile-io/smile-shopify-app-extensions/pull/364).

## v52 - 2024-03-28

### Changed

- Dependency updates. [#353](https://github.com/smile-io/smile-shopify-app-extensions/pull/353).

## v51 - 2024-03-20

### Fixed

- **[Theme app extension]** Fix PoAP bug for shoppers with 0 points. [#351](https://github.com/smile-io/smile-shopify-app-extensions/pull/351).

## v50 - 2024-03-19

### Changed

- Dependency updates. [#345](https://github.com/smile-io/smile-shopify-app-extensions/pull/345).

## v49 - 2024-03-15

### Changed

- dependabot security update. [#348](https://github.com/smile-io/smile-shopify-app-extensions/pull/348).

## v48 - 2024-03-14

### Changed

- dependabot security update. [#346](https://github.com/smile-io/smile-shopify-app-extensions/pull/346).

## v46 - 2024-02-05

### Changed

- Dependency updates. [#340](https://github.com/smile-io/smile-shopify-app-extensions/pull/340).

## v45 - 2024-01-30

### Changed

- Dependency updates - libyears [#339](https://github.com/smile-io/smile-shopify-app-extensions/pull/339) and dependabot [#330](https://github.com/smile-io/smile-shopify-app-extensions/pull/330).

## v44 - 2024-01-29

### Fixed

- **[Redeem points extension]** Sets the success icon to the correct size and colour. [#338](https://github.com/smile-io/smile-shopify-app-extensions/pull/338)

## v43 - 2024-01-29

### Changed

- Update dependencies. [#331](https://github.com/smile-io/smile-shopify-app-extensions/pull/331)

## v42 - 2024-01-29

### Fixed

- **[Redeem points extension]** Improve detection of whether discount code was applied to checkout. [#337](https://github.com/smile-io/smile-shopify-app-extensions/pull/337)

## v41 - 2024-01-22

### Changed

- **[Redeem points extension]** Removes the lockout state that prevents customers from using the extension when a discount code is already applied. [#332](https://github.com/smile-io/smile-shopify-app-extensions/pull/332)
- **[Redeem points extension]** Adds a warning banner when a customer successfully redeems a discount code but the code is incompatible with ones already applied. [#336](https://github.com/smile-io/smile-shopify-app-extensions/pull/336)

## v40 - 2024-01-15

### Fixed

- **[Theme app extension]** Unescaped quotes in parsed JSON resulting in syntax error causing PoPP app block not to display for merchants. [#334](https://github.com/smile-io/smile-shopify-app-extensions/pull/334)

## v39 - 2024-01-10

### Changed

- **[Show points customer will earn extension]** Hide extension if shopper is excluded [#329](https://github.com/smile-io/smile-shopify-app-extensions/pull/329)

## v38 - 2024-01-10

### Changed

- **[Theme app extension]** Update the earnable points on PoPP app block when user selects a different product variant. [#326](https://github.com/smile-io/smile-shopify-app-extensions/pull/326)

## v37 - 2024-01-09

### Changed

- Dependencies update. ([#290](https://github.com/smile-io/smile-shopify-app-extensions/pull/290))

## v36 - 2024-01-05

### Fixed

- **[Theme app extension]** Account for shopper's currency when calculating points amount on product page [#328](https://github.com/smile-io/smile-shopify-app-extensions/pull/328)

## v35 - 2023-12-20

### Changed

- **[Theme app extension]** Hide PoAP if merchant has no rewards [#324](https://github.com/smile-io/smile-shopify-app-extensions/pull/324)

## v34 - 2023-12-20

### Added

- **[Show points earned on order extension]** Added showing guest customers points earned support. [#323](https://github.com/smile-io/smile-shopify-app-extensions/pull/323)

## v33 - 2023-12-20

### Changed

- **[Theme app extension]** Hide the PoPP app block if the merchant does not have any active "online order" earning rules and update the unsupported config banner copy in the theme editor. [#320](https://github.com/smile-io/smile-shopify-app-extensions/pull/320)

## v32 - 2023-12-18

### Fixed

- **[Show points earned on order extension]** Restored spacing between extension title and body. [#321](https://github.com/smile-io/smile-shopify-app-extensions/pull/321)
- **[Show points earned on order extension]** Tweaked grammar in title shown to signed-out shoppers. [#322](https://github.com/smile-io/smile-shopify-app-extensions/pull/322)

## v31 - 2023-12-13

### Changed

- **[Show points customer will earn extension]** Hide the extension if the points that the shopper will earn is zero. [#319](https://github.com/smile-io/smile-shopify-app-extensions/pull/319)

## v30 - 2023-12-13

### Fixed

- **[Redeem Points extension]** Fix error that prevented unsupported banner to appear if there are no active fixed rewards. [#318](https://github.com/smile-io/smile-shopify-app-extensions/pull/318)

## v29 - 2023-12-12

### Changed

- **[Redeem Points extension]** Update the extension to use a darker background as per Shopify's recommendation and change Button to be primary. [#315](https://github.com/smile-io/smile-shopify-app-extensions/pull/315)

## v28 - 2023-12-12

### Changed

- **[Redeem Points extension]** Change loading state skeleton text [#316](https://github.com/smile-io/smile-shopify-app-extensions/pull/316)

## v27 - 2023-12-12

### Changed

- **[Checkout extensions]** Add new `@shopify/ui-extensions-react` library to be able to use a darker background on extensions. [#315](https://github.com/smile-io/smile-shopify-app-extensions/pull/315)
- **[OSP checkout extension]** Update the extension to use a darker background as per Shopify's recommendation. [#315](https://github.com/smile-io/smile-shopify-app-extensions/pull/315)
- **[Show order points value at checkout extension]** Update the extension to use a darker background as per Shopify's recommendation. [#315](https://github.com/smile-io/smile-shopify-app-extensions/pull/315)

## v26 - 2023-12-11

### Changed

- **[Theme app extension]** Hide the PoPP if product is a gift card, add conditional unsupported banner message for gift cards. [#313](https://github.com/smile-io/smile-shopify-app-extensions/pull/313)

## v25 - 2023-12-04

### Fixed

- **[OSP checkout extension]** Fix OSP extension preview in checkout editor. [#312](https://github.com/smile-io/smile-shopify-app-extensions/pull/312)

## v24 - 2023-12-01

### Changed

- **[Theme app extension]** Added top padding to account page app block. [#311](https://github.com/smile-io/smile-shopify-app-extensions/pull/311)

## v23 - 2023-11-30

### Changed

- **[Theme app extension]** Small copy change in PoAP app block. ([#309](https://github.com/smile-io/smile-shopify-app-extensions/pull/309))

## v22 - 2023-11-29

### Fixed

- **[Theme app extension]** Avoid using stale data when rendering PoPP and PoAP app blocks in the theme editor. ([#308](https://github.com/smile-io/smile-shopify-app-extensions/pull/308))

## v21 - 2023-11-28

### Added

- **[Theme app extension]** Added new Points on Product Page (PoPP) and Points on Account Page (PoAP) app blocks. ([#306](https://github.com/smile-io/smile-shopify-app-extensions/pull/306))

## v20 - 2023-11-16

### Removed

- Removed guest support from the OSP extension ([#297](https://github.com/smile-io/smile-shopify-app-extensions/pull/297))

## v19 - 2023-11-16

### Changed

- Changed TYP logged out copy to match designs ([#295](https://github.com/smile-io/smile-shopify-app-extensions/pull/295))

## v18 - 2023-11-16

### Changed

- **[OSP checkout extension]** Make the heading text sizes consistent. ([#296](https://github.com/smile-io/smile-shopify-app-extensions/pull/296))

## v17 - 2023-11-09

### Changed

- Dependencies update. ([#271](https://github.com/smile-io/smile-shopify-app-extensions/pull/271))

## v16 - 2023-11-06

### Changed

- **[Theme app extension]** Improves the Smile Loader script to ensure we specifically keep the Shopify App Block and remove the one inserted by Assets API. ([#267](https://github.com/smile-io/smile-shopify-app-extensions/pull/267))

## v15 - 2023-10-23

### Dependencies udpate

- Dependencies update. ([#266](https://github.com/smile-io/smile-shopify-app-extensions/pull/266))

## v14 - 2023-10-23

### Added

- **[OSP/TYP checkout extension]** Separate OSP and TYP data collection. ([#263](https://github.com/smile-io/smile-shopify-app-extensions/pull/263))

## v13 - 2023-10-23

### Security

- Bumped `postcss` and `@babel/traverse`. ([#265](https://github.com/smile-io/smile-shopify-app-extensions/pull/265))

## v12 - 2023-10-13

### Changed

- **[OSP checkout extension]** Refactor the logic for showing content in the OSP extension.

## v11 - 2023-10-13

### Changed

- **[OSP checkout extension]** Put the OSP extension behind a feature flag according to the merchant's plan.

## v10 - 2023-09-25

### Changed

- **[Theme app extension]** Convert all utility functions into TypeScript.

## v9 - 2023-09-24

### Added

- **[OSP checkout extension]** Intial release of the order status page checkout extension. ([#256](https://github.com/smile-io/smile-shopify-app-extensions/pull/256))

## v8 - 2023-09-25

### Changed

- Dependencies update. ([#232](https://github.com/smile-io/smile-shopify-app-extensions/pull/232))

## v7 - 2023-09-19

### Changed

- **[Theme app extension]** Update App blocks shared components to use TypeScript. ([#217](https://github.com/smile-io/smile-shopify-app-extensions/pull/217))

## v6 - 2023-09-14

### Changed

- **[Theme app extension]** Update Webpack configurations to support TypeScript. ([#216](https://github.com/smile-io/smile-shopify-app-extensions/pull/216))

## v5 - 2023-09-12

### Changed

- **[Theme app extension]** Group shared JavaScript and CSS into own files, making the outputted js assets for each app block leaner ([#206](https://github.com/smile-io/smile-shopify-app-extensions/pull/206)).

## v4 - 2023-09-07

### Added

Configure renovate to automatically update dependencies ([#221](https://github.com/smile-io/smile-shopify-app-extensions/pull/221))

## v3 - 2023-09-04

### Changed

- **[Theme app extension]** Ensure minified CSS class names remain consistent between versions ([#220](https://github.com/smile-io/smile-shopify-app-extensions/pull/220))

## v2 - 2023-08-31

### Changed

- **[Theme app extension]** Use webpack asset handling to include images in the build ([#211](https://github.com/smile-io/smile-shopify-app-extensions/pull/211))

## v1 - 2023-08-31

- Initial release of all previously-published Smile extensions under Shopify's new "simplified deployment" system.
