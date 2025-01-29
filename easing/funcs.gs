# Easing function collection
# Maybe add seperate settings for each function - e.g. back could get a back bounce input
# Elastic could also get a rate value

%define _easeinsine(x) 1 - cos(90 * x)
%define _easeoutsine(x) sin(90 * x)
%define _easeinoutsine(x) (1 - cos(180 * x)) / 2

func _easeinpow(x, rate) {
    return POW($x, $rate);
}
func _easeoutpow(x, rate) {
    return 1 - POW(1 - $x, $rate);
}
func _easeinoutpow(x, rate) {
    if $x < 0.5 {
        return POW(2 * $x, $rate) / 2;
    } else {
        return 1 - POW(2 - 2 * $x, $rate) / 2;
    }
}

%define _easeinexpo(x) antiln(6.931471805599453 * (x-1)) + (1 - x) * 0.0009765625
%define _easeoutexpo(x) 1 - (antiln(-6.931471805599453 * x) + x * 0.0009765625)
func _easeinoutexpo(x) {
    if $x < 0.5 {
        return 0.5 * (antiln(13.862943611198906 * $x - 6.931471805599453) + 0.0009765625 - (0.001953125 * $x));
    } else {
        return 0.5 * (2 - (antiln(-13.862943611198906 * ($x - 0.5) + 0.001953125 * ($x - 0.5))));
    }
}

%define _easeincirc(x) 1 - sqrt(1 - x * x)
%define _easeoutcirc(x) sqrt(1 - (1 - x) * (1 - x))
func _easeinoutcirc(x) {
    if $x < 0.5 {
        return 0.5 * (1 - sqrt(1 - 4 * $x * $x));
    } else {
        return 0.5 + 0.5 * sqrt(1 - 4 * (1 - $x) * (1 - $x));
    }
}

%define _easeinback(x) x * x * ((1.70158 + 1) * x - 1.70158)
%define _easeoutback(x) 1 - (1 - x) * (1 - x) * ((1.70158 + 1) * (1 - x) - 1.70158)
func _easeinoutback(x) {
    # unoptimised
    if $x < 0.5 {
        return 0.5 * _easeinback(2 * $x);
    } else {
        return (1 + _easeoutback(2 * $x - 1)) / 2;
    }
}

%define _easeinelastic(x) sin(1200 * x - 1290) * (0.0009765625 * (x - 1) - antiln(6.931471805599453 * x - 6.931471805599453))
%define _easeoutelastic(x) 1 - sin(90 + 1200 * x) * (antiln(-6.931471805599453 * x) - 0.0009765625 * x)
func _easeinoutelastic(x) {
    # unoptimised
    if $x < 0.5 {
        return 0.5 * _easeinelastic(2 * $x);
    } else {
        return (2 - _easeinelastic((1 - $x) * 2)) / 2; # strangely, if you change (1 - $x) * 2) to 2 - $x * 2, the compiler, trying to be smart, actually breaks the code
    }
}

func _easeinbounce(x) {
    if $x > 0.636363636364 {
        return 1 - 7.5625 * (1 - $x) * (1 - $x);
    } elif $x > 0.27272727272700004 {
        return 0.25 - 7.5625 * (0.45454545454499995 - $x) * (0.45454545454499995 - $x);
    } elif $x > 0.09090909090900001 {
        return 0.0625 - 7.5625 * (0.18181818181800002 - $x) * (0.18181818181800002 - $x);
    } else {
        return 0.015625 - 7.5625 * (0.04545454545500005 - $x) * (0.04545454545500005 - $x);
    }
}
%define _easeoutbounce(x) 1 - _easeinbounce(1-x)
func _easeinoutbounce(x) {
    # unoptimised
    if $x < 0.5 {
        return 0.5 * _easeinbounce(2 * $x);
    } else {
        return (2 - _easeinbounce((1 - $x) * 2)) / 2; # strangely, if you change (1 - $x) * 2) to 2 - $x * 2, the compiler, trying to be smart, actually breaks the code
    }
}
