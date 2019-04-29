<template>
  <div class="about">
    <h1>About</h1>

    <div class="content-wrapper">
      <p class="content-wrapper__text-element-left headline">
        emwas (which stands for Efficient Masturbation With Aggregated Search) is an
        <a href="https://github.com/fabienleite/emwas/blob/master/LICENSE">open source</a>
        tool which goal is to facilitate the process of finding the appropriate porn video
        when you subscribed to multiple premium websites.
      </p>

      <p class="content-wrapper__text-element-left">
        A few things it can help you with are:
        <ul>
          <li>Waste less time searching and optimize your masturbation time</li>
          <li>Compare scenes easier beetween mutliple websites</li>
          <li>Have a unified and prettier interface for finding your porn</li>
        </ul>
      </p>

      <h2 class="content-wrapper__text-element-center"> FAQ </h2>

      <div class="content-wrapper__text-element-left">
        <div class="question-answer-wrapper">
          <div class="question-answer">
            <div class="question-answer__question">
              Do you plan adding [insert porn tube name] ?
            </div>
            <div class="question-answer__answer">
              No, and we'll never do.
            </div>
          </div>
          <div class="question-answer">
            <div class="question-answer__question">
              Do you plan adding [insert premium porn site name] ?
            </div>
            <div class="question-answer__answer">
              Have a look at <a href="https://github.com/fabienleite/emwas/projects">our Roadmap</a>
              to check if it's into. <br/>
              If it's not, consult
              <a href="https://github.com/fabienleite/emwas/issues?q=is%3Aissue">project Issues</a>
              (don't forget closed ones). <br/>
              If you don't find the site you want, consider opening a new Issue
              to let us know you have a specific need.
            </div>
          </div>
          <div class="question-answer">
            <div class="question-answer__question">Why are you doing this ?</div>
            <div class="question-answer__answer">
              Because I like web developpement and I like porn. <br/>
              And because I hate wasting my time.
            </div>
          </div>
          <div class="question-answer">
            <div class="question-answer__question">How are you handling privacy ?</div>
            <div class="question-answer__answer">
              By not storing your data. We store nothing that is related to you. <br/>
              We do not use Google Analytics nor any other privacy unfriendly analytics solution.
            </div>
          </div>
          <div class="question-answer">
            <div class="question-answer__question">Where are you hosted ?</div>
            <div class="question-answer__answer">
              We are for now hosted on AWS Lambda for server side and Netlify
              for client side.
            </div>
          </div>
        </div>
      </div>

      <h2 class="content-wrapper__text-element-center"> Reviewing code / Participating </h2>

      <p class="content-wrapper__text-element-left">
        As emwas is an Open Source project, you can review code or participate in many ways. <br/>
        You can browse our Github to find more informations about it. <br/>
      </p>

      <div class="content-wrapper__text-element-center">
        <a href="https://github.com/fabienleite/emwas">
          <img
            class="github-icon"
            src="../assets/GitHub-Mark-120px-plus.png"
            alt="Github icon"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

@import ../assets/sass/variables

.headline
  font-size: 1.3em
  font-style: italic

.content-wrapper
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: left

%content-wrapper__text-element
  max-width: 90%
  @media screen and (min-width: $medium-screen)
    width: 55em

.content-wrapper__text-element-left
  @extend %content-wrapper__text-element
  text-align: left

.content-wrapper__text-element-center
  @extend %content-wrapper__text-element
  text-align: center

.github-icon
  margin: 1em
  width: 3em
  display: block
  margin-left: auto
  margin-right: auto

.question-answer__question
  font-weight: bold

.question-answer
  margin-bottom: 1em

</style>
