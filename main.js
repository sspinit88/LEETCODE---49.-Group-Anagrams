/*
49. Group Anagrams

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]



Ваша задача - сгруппировать анаграммы вместе в массиве строк strs. Вы можете вернуть ответ в любом порядке.

Анаграмма - это слово или фраза, образованная путем перестановки букв другого слова или фразы, обычно используя все исходные буквы ровно один раз.

Вот шаги, которые мы будем следовать:

1. Создайте словарь для отслеживания групп анаграмм. Ключом будет отсортированная строка, а значением - массив строк, 
   которые являются анаграммами этой отсортированной строки.
2. Пройдите по каждой строке в strs. Добавьте строку в соответствующую группу в словаре.
3. Верните все группы из словаря.

Your task is to group the anagrams together in an array of strings strs. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Here are the steps we will follow:

1. Create a dictionary to track the groups of anagrams. The key will be the sorted string, 
   and the value will be an array of strings that are anagrams of this sorted string.
2. Go through each string in strs. Add the string to the corresponding group in the dictionary.
3. Return all groups from the dictionary.

*/

function groupAnagrams(strs) {
  // Создаем словарь для отслеживания групп анаграмм
  // Create a dictionary to track the groups of anagrams
  let map = {};

  // Проходим по каждой строке в strs
  // Go through each string in strs
  for (let str of strs) {
    // Сортируем строку и используем ее в качестве ключа в словаре
    // Sort the string and use it as a key in the dictionary
    let sorted = Array.from(str).sort().join('');

    // Добавляем строку в соответствующую группу в словаре
    // Add the string to the corresponding group in the dictionary
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }

  // Возвращаем все группы из словаря
  // Return all groups from the dictionary
  return Object.values(map);
}
