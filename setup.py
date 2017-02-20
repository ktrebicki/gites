#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re
from setuptools import setup, find_packages

here = os.path.dirname(__file__)
with open(os.path.join(here, 'src', 'gites', '__init__.py')) as v_file:
    package_version = re.compile(r".*__version__ = '(.*?)'", re.S).match(v_file.read()).group(1)


def read(fname):
    """
    Read given file's content.

    :param str fname: file name
    :returns: file contents
    :rtype: str
    """
    return open(os.path.join(here, fname)).read()

requirements = [
    'path.py==10.1',
    'Flask==0.12',
]

test_requires = [
    'pytest',
    'pytest-cov'
]

extras_require = {
    'tests': test_requires
}

setup(
    name='gites',
    version=package_version,
    description='Git log analyser with web based GUI.',
    long_description=(
        read('README.rst') + '\n\n' + read('CHANGES.rst')
    ),
    keywords='git analysis',
    author='Krzysztof Trębicki',
    author_email='trebicki.krzysztof@gmail.com',
    url='https://github.com/ktrebicki/gites',
    license="MIT License",
    classifiers=[
        'Development Status :: 1 - Planning',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Topic :: Software Development :: Version Control',
        'Topic :: Software Development :: Quality Assurance',
        'Topic :: Scientific/Engineering :: Information Analysis'
    ],
    package_dir = {'': 'src'},
    packages=find_packages('src'),
    install_requires=requirements,
    tests_require=test_requires,
    test_suite='tests',
    include_package_data=True,
    zip_safe=False,
    extras_require=extras_require,
)
