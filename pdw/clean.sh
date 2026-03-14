set -eu

# Remove Mothim forms
rm -f 414-{1,2}.png
# Remove Scatterbug and Spewpa forms
rm -f 664-{1..19}.png
rm -f 665-{1..19}.png
# Remove event Vivillon forms
rm -f 666-{18,19}.png
# Remove N's Floette
rm -f 670-5.png

d() {
	cp -f $1-$2.png $1.png
}

# Copy default forms
d 201 a
d 386 normal
d 412 plant
d 413 plant
d 421 overcast
d 422 west
d 423 west
d 487 altered
d 492 land
d 493 normal
d 550 red-striped
d 555 standard
d 585 spring
d 586 spring
d 592 male
d 593 male
d 641 incarnate
d 642 incarnate
d 645 incarnate
d 647 ordinary
d 648 aria
d 666 meadow
d 669 red
d 670 red
d 671 red
d 678 male
d 681 shield
d 710 average
d 711 average
#d 716 active
