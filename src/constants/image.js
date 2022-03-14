// First a couple helper functions
function $(id) {
    return !id || id.nodeType === 1 ? id : document.getElementById(id);
}
function isType(o,t) {    return (typeof o).indexOf(t.charAt(0).toLowerCase()) === 0;}

// Here's the meat and potatoes
function image(src,cfg) {    var img, prop, target;
    cfg = cfg || (isType(src,'o') ? src : {});

    img = $(src);
    if (img) {
        src = cfg.src || img.src;
    } else {
        img = document.createElement('img');
        src = src || cfg.src;
    }

    if (!src) {
        return null;
    }

    prop = isType(img.naturalWidth,'u') ? 'width' : 'naturalWidth';
    img.alt = cfg.alt || img.alt;

    // Add the image and insert if requested (must be on DOM to load or
    // pull from cache)
    img.src = src;

    target = $(cfg.target);
    if (target) {
        target.insertBefore(img, $(cfg.insertBefore) || null);
    }

    // Loaded?
    if (img.complete) {
        if (img[prop]) {
            if (isType(cfg.success,'f')) {
                cfg.success.call(img);
            }
        } else {
            if (isType(cfg.failure,'f')) {
                cfg.failure.call(img);
            }
        }
    } else {
        if (isType(cfg.success,'f')) {
            img.onload = cfg.success;
        }
        if (isType(cfg.failure,'f')) {
            img.onerror = cfg.failure;
        }
    }

    return img;
}

export { image }