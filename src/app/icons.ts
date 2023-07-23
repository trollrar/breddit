import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {
    faBreadSlice,
    faComments,
    faFire,
    faHome,
    faLongArrowAltDown,
    faLongArrowAltUp,
    faPlus,
    faSignInAlt,
    faSignOutAlt,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

export function initIconLibrary(library: FaIconLibrary): void {
    library.addIcons(
        faLongArrowAltUp, faLongArrowAltDown, faComments, faPlus, faHome, faSignOutAlt, faSignInAlt, faFire, faBreadSlice, faTimes
    );
}
