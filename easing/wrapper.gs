
# - easing wrapper things -
# ease 
# time:
#     - from time that lasts for x seconds
#     - from time a to time b
# style
#     - style name + inout
#     - concatenate stylename & inout
# values
#     - from v1 to v2
#     - from v1 to v1 + x
#     - from 0 to x

func ease(x, type, inout) {

    if $type == $type + "" {
        if $inout == "in" {
            return _easeinpow($x, $type);
        } elif $inout == "out" {
            return _easeoutpow($x, $type);
        } else {
            return _easeinoutpow($x, $type);
        }
    }

    elif $type == "sine" {
        if $inout == "in" {
            return _easeinsine($x);
        } elif $inout == "out" {
            return _easeoutsine($x);
        } else {
            return _easeinoutsine($x);
        }
    }

    elif $type == "expo" {
        if $inout == "in" {
            return _easeinexpo($x);
        } elif $inout == "out" {
            return _easeoutexpo($x);
        } else {
            return _easeinoutexpo($x);
        }
    }

    elif $type == "circ" {
        if $inout == "in" {
            return _easeincirc($x);
        } elif $inout == "out" {
            return _easeoutcirc($x);
        } else {
            return _easeinoutcirc($x);
        }
    }

    elif $type == "back" {
        if $inout == "in" {
            return _easeinback($x);
        } elif $inout == "out" {
            return _easeoutback($x);
        } else {
            return _easeinoutback($x);
        }
    }
    
    elif $type == "elastic" {
        if $inout == "in" {
            return _easeinelastic($x);
        } elif $inout == "out" {
            return _easeoutelastic($x);
        } else {
            return _easeinoutelastic($x);
        }
    }

    elif $type == "bounce" {
        if $inout == "in" {
            return _easeinbounce($x);
        } elif $inout == "out" {
            return _easeoutbounce($x);
        } else {
            return _easeinoutbounce($x);
        }
    }
}
