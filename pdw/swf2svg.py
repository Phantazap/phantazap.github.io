import sys
from cStringIO import StringIO

from swf.movie import SWF
from swf.export import SVGExporter

def getimagedata(swf):
    for tag in swf.tags:
        if tag.name == 'DefineBinaryData':
            return tag.data


def doit(inf, outf):
    exporter = SVGExporter()

    swf = SWF(inf)
    svg = swf.export(exporter)

    outf.write(svg.read())

def main():
    doit(sys.stdin, sys.stdout)

if __name__ == '__main__':
    main()
