/*
Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! 
You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: 
Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, 
including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]

the output should be solution(image) = [[1]].
*/

function solution(image) {
    c = []
    for (k=0; k<image.length - 2; k++) {
        r=[]
        for (i=0; i<image[0].length - 2; i++) {
            avg = 0
            for (j=0; j<3; j++) avg += image[j+k].slice(0 + i, 3 + i).reduce((a,b) => a+b)
            r.push(parseInt(avg/9))
        }
        c.push(r)
    }
    return c
}