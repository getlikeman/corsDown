function corsDown(target) {
    let p = target.split("/");
    let t = '';
    for (let i = 0; i < p.length; i++) {
        if (i === 2) {
            t += p[i].replaceAll('-', '--').replaceAll('.', '-') + atob('LnRyYW5zbGF0ZS5nb29n') + '/';
        } else {
            if (i !== p.length - 1) {
                t += p[i] + '/';
            } else {
                t += p[i];
            }
        }
    }
    target = encodeURI(t)
    return target;
}
export default corsDown()
