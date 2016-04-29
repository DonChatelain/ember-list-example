export default function() {
  // This is the transitions file for liquid-fire
  this.transition(
    this.hasClass('crossfade-transition'),
    this.use('crossFade')
  );
}
