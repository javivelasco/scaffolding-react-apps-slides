import bespoke from 'bespoke';           // Bespoke main
import backdrop from 'bespoke-backdrop'; // Background images with backdrop effects
import bullets from 'bespoke-bullets';   // Style and animate bullet lists
import classes from 'bespoke-classes';   // Add helper classes to slides
import forms from 'bespoke-forms';       // Prevent keyboard events inside form elements.
import hash from 'bespoke-hash';         // Hash routing for slides.
import keys from 'bespoke-keys';         // Use the keyboard to move through slides.
import progress from 'bespoke-progress'; // Progress bar on top of the presentation.
import scale from 'bespoke-scale';       // Responsive slide scaling
import touch from 'bespoke-touch';       // Touch support for the presentation
import './theme.scss';

export default function () {
  bespoke.from('article', [
    backdrop(),
    bullets('li, .bullet'),
    classes(),
    forms(),
    hash(),
    keys(),
    progress(),
    scale(),
    touch()
  ]);
}
