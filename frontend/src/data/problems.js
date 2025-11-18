export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "rotate-array": {
    id: "rotate-array",
    title: "Rotate Array",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "Given an array, rotate the array to the right by k steps, where k is non-negative.",
      notes: [
        "Try to come up with an in-place solution with O(1) extra space.",
        "k may be larger than the array length; handle that correctly.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4,5,6,7], k = 3",
        output: "[5,6,7,1,2,3,4]",
        explanation:
          "Rotate right by 3 steps: [1,2,3,4,5,6,7] -> [5,6,7,1,2,3,4].",
      },
      {
        input: "nums = [-1,-100,3,99], k = 2",
        output: "[3,99,-1,-100]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "0 ≤ k ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function rotate(nums, k) {
  // Write your solution here
  
}

// Test cases
let a1 = [1,2,3,4,5,6,7];
rotate(a1, 3);
console.log(a1); // Expected: [5,6,7,1,2,3,4]

let a2 = [-1,-100,3,99];
rotate(a2, 2);
console.log(a2); // Expected: [3,99,-1,-100]`,
      python: `def rotate(nums, k):
    # Write your solution here
    pass

# Test cases
a1 = [1,2,3,4,5,6,7]
rotate(a1, 3)
print(a1)  # Expected: [5,6,7,1,2,3,4]

a2 = [-1,-100,3,99]
rotate(a2, 2)
print(a2)  # Expected: [3,99,-1,-100]`,
      java: `import java.util.*;

class Solution {
    public static void rotate(int[] nums, int k) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] a1 = {1,2,3,4,5,6,7};
        rotate(a1, 3);
        System.out.println(Arrays.toString(a1)); // Expected: [5,6,7,1,2,3,4]

        int[] a2 = {-1,-100,3,99};
        rotate(a2, 2);
        System.out.println(Arrays.toString(a2)); // Expected: [3,99,-1,-100]
    }
}`,
    },
    expectedOutput: {
      javascript: "[5,6,7,1,2,3,4]\n[3,99,-1,-100]",
      python: "[5, 6, 7, 1, 2, 3, 4]\n[3, 99, -1, -100]",
      java: "[5, 6, 7, 1, 2, 3, 4]\n[3, 99, -1, -100]",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      notes: [
        "You must do this in-place without making a copy of the array.",
        "Minimize the total number of operations.",
      ],
    },
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
        explanation:
          "All zeros moved to the end while preserving order of non-zero elements.",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
let b1 = [0,1,0,3,12];
moveZeroes(b1);
console.log(b1); // Expected: [1,3,12,0,0]

let b2 = [0];
moveZeroes(b2);
console.log(b2); // Expected: [0]`,
      python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
b1 = [0,1,0,3,12]
moveZeroes(b1)
print(b1)  # Expected: [1,3,12,0,0]

b2 = [0]
moveZeroes(b2)
print(b2)  # Expected: [0]`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] b1 = {0,1,0,3,12};
        moveZeroes(b1);
        System.out.println(Arrays.toString(b1)); // Expected: [1,3,12,0,0]

        int[] b2 = {0};
        moveZeroes(b2);
        System.out.println(Arrays.toString(b2)); // Expected: [0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]\n[0]",
      python: "[1, 3, 12, 0, 0]\n[0]",
      java: "[1, 3, 12, 0, 0]\n[0]",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Product",
    description: {
      text: "Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "Solve it without division and in O(n) time.",
        "Can you do it with O(1) extra space (output array does not count)?",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "find-duplicate": {
    id: "find-duplicate",
    title: "Find the Duplicate Number",
    difficulty: "Medium",
    category: "Array • Two Pointers • Binary Search",
    description: {
      text: "Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Find the duplicate number without modifying the array and using O(1) extra space.",
      notes: [
        "There is only one repeated number but it may appear more than twice.",
        "Multiple approaches: cycle detection (Floyd), binary search on value range.",
      ],
    },
    examples: [
      {
        input: "nums = [1,3,4,2,2]",
        output: "2",
      },
      {
        input: "nums = [3,1,3,4,2]",
        output: "3",
      },
    ],
    constraints: ["2 ≤ n ≤ 10⁵ (array length = n+1)", "1 ≤ nums[i] ≤ n"],
    starterCode: {
      javascript: `function findDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
console.log(findDuplicate([3,1,3,4,2])); // Expected: 3`,
      python: `def findDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(findDuplicate([1,3,4,2,2]))  # Expected: 2
print(findDuplicate([3,1,3,4,2]))  # Expected: 3`,
      java: `class Solution {
    public static int findDuplicate(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findDuplicate(new int[]{1,3,4,2,2})); // Expected: 2
        System.out.println(findDuplicate(new int[]{3,1,3,4,2})); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "Sliding window with a set or map gives O(n) time.",
        "Return the length only.",
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke" with the length of 3.',
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 10⁵",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "String • Hash Table",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: [
        "Using a hash map keyed by sorted string or letter-count signature groups anagrams.",
        "Output is an array of anagram groups.",
      ],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "0 ≤ strs[i].length ≤ 100",
      "strs[i] consists of lowercase English letters.",
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // Expected groups
console.log(groupAnagrams([""])); // Expected: [[""]]`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))  # Expected groups
print(groupAnagrams([""]))  # Expected: [[""]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"})); // Expected groups
        System.out.println(groupAnagrams(new String[]{""})); // Expected: [[""]]
    }
}`,
    },
    expectedOutput: {
      javascript: '[["eat","tea","ate"],["tan","nat"],["bat"]]\n[[""]]',
      python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\n[['']]",
      java: "[[eat, tea, ate], [tan, nat], [bat]]\n[[]]",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Matrix • Backtracking",
    description: {
      text: "Given an m x n board and a word, return true if the word exists in the grid. The word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
      notes: [
        "Typical DFS/backtracking on grid with visited marking.",
        "Be careful to backtrack visited flags correctly.",
      ],
    },
    examples: [
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input: 'board = [["a"]], word = "aa"',
        output: "false",
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 6",
      "1 ≤ word.length ≤ 15",
    ],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
  
}

// Test cases
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], "ABCCED")); // Expected: true
console.log(exist([['a']], "aa")); // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
print(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], "ABCCED"))  # Expected: True
print(exist([['a']], "aa"))  # Expected: False`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "ABCCED")); // Expected: true
        System.out.println(exist(new char[][]{{'a'}}, "aa")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Matrix • In-place",
    description: {
      text: "Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.",
      notes: [
        "Try to use the matrix itself for marking to achieve O(1) extra space.",
        "Edge cases: first row/column used as markers.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,1,1],[1,0,1],[1,1,1]]",
        explanation:
          "After setting row and column of the zero element, result is [[1,0,1],[0,0,0],[1,0,1]] (note: printed here as nested array).",
      },
      {
        input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 200",
      "-2³¹ ≤ matrix[i][j] ≤ 2³¹-1",
    ],
    starterCode: {
      javascript: `function setZeroes(matrix) {
  // Write your solution here
  
}

// Test cases
let m1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(m1);
console.log(m1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

let m2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(m2);
console.log(m2); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,
      python: `def setZeroes(matrix):
    # Write your solution here
    pass

# Test cases
m1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(m1)
print(m1)  # Expected: [[1,0,1],[0,0,0],[1,0,1]]

m2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(m2)
print(m2)  # Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,
      java: `import java.util.*;

class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[][] m1 = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(m1);
        System.out.println(Arrays.deepToString(m1)); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

        int[][] m2 = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
        setZeroes(m2);
        System.out.println(Arrays.deepToString(m2)); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
      python:
        "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
      java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
    },
  },

  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Matrix • Simulation",
    description: {
      text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
      notes: [
        "Simulate boundaries (top, bottom, left, right) and iterate layer by layer.",
        "Careful with single row or single column remaining.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]",
      },
      {
        input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        output: "[1,2,3,4,8,12,11,10,9,5,6,7]",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 10⁴",
      "Total elements m*n ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
  // Write your solution here
  
}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      python: `def spiralOrder(matrix):
    # Write your solution here
    pass

# Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))  # Expected: [1,2,3,6,9,8,7,4,5]
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))  # Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}})); // Expected: [1,2,3,6,9,8,7,4,5]
        System.out.println(spiralOrder(new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12}})); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,6,9,8,7,4,5]\n[1,2,3,4,8,12,11,10,9,5,6,7]",
      python:
        "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
    },
  },
  
  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window • Hashing",
    description: {
      text: "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) appears in the window. If no such substring exists, return an empty string.",
      notes: [
        "Characters in t may be repeated. Your window must contain all occurrences.",
        "If multiple windows are valid, return the smallest one in length.",
        "If there is no valid substring, return an empty string.",
      ],
    },
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation:
          'The minimum window substring that contains A, B, and C is "BANC".',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
        explanation: "Single character matches the requirement.",
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
        explanation: "There is no substring of s that contains two 'a's.",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 10⁵",
      "s and t consist of uppercase and lowercase English letters",
    ],
    starterCode: {
      javascript:
        'function minWindow(s, t) {\n  // Write your solution here\n\n}\n\n// Test cases\nconsole.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"\nconsole.log(minWindow("a", "a")); // Expected: "a"\nconsole.log(minWindow("a", "aa")); // Expected: ""',
      python:
        'def minWindow(s, t):\n    # Write your solution here\n    pass\n\n# Test cases\nprint(minWindow("ADOBECODEBANC", "ABC"))  # Expected: "BANC"\nprint(minWindow("a", "a"))  # Expected: "a"\nprint(minWindow("a", "aa"))  # Expected: ""',
      java: 'import java.util.*;\n\nclass Solution {\n    public static String minWindow(String s, String t) {\n        // Write your solution here\n\n        return "";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC\n        System.out.println(minWindow("a", "a")); // Expected: a\n        System.out.println(minWindow("a", "aa")); // Expected: \n    }\n}',
    },
    expectedOutput: {
      javascript: "BANC\na\n",
      python: "BANC\na\n",
      java: "BANC\na\n",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
