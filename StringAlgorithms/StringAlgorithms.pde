import java.io.IOException;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

PImage carolCover, carolOpen, frankCover, frankOpen;
int carolGrade, frankGrade;
double carolEase, frankEase;
boolean overCarol, overFrank;

void setup(){
  size(1280, 720);
  carolCover = loadImage("/Volumes/NO_NAME/advancedCompSci/StringAlgorithms/bookcover.jpg");
  carolOpen = loadImage("/Volumes/NO_NAME/advancedCompSci/StringAlgorithms/titlepage.jpg");
  frankCover = loadImage("/Volumes/NO_NAME/advancedCompSci/StringAlgorithms/leathercover.jpg");
  frankOpen = loadImage("/Volumes/NO_NAME/advancedCompSci/StringAlgorithms/paper.jpg");
  StringParser parse = new StringParser("Hey, I'm a senior. See you later."); 
  System.out.println("Words: "+parse.countWords());
  System.out.println("Vowels: "+parse.countVowels(parse.para));
  System.out.println("Syllables: "+parse.countSyllables());
  System.out.println("Sentences: "+parse.countSentences());
  String book = "";
  try{
    Scanner file = new Scanner(new File("/Volumes/NO_NAME/advancedCompSci/StringAlgorithms/christmasCarol.txt"));//Mac
    //Scanner file = new Scanner(new File("G:/advancedCompSci/StringAlgorithms/christmasCarol.txt"));//Windows
    while(file.hasNext()){
      book+=file.nextLine()+" ";
    }file.close();
  }catch(FileNotFoundException e){
    System.out.println("The file could not be found");
  }catch(Exception e){
    e.printStackTrace();
  }parse = new StringParser(book);
  carolEase = fleschReadingEase(parse);
  carolGrade = (int)fleschKincaidGradeLevel(parse);
  System.out.println("A Christmas Carol Reading Ease "+String.format("%.2f", carolEase));
  System.out.println("A Christmas Carol Grade Level: "+carolGrade);
  book = "";
  try{
    Scanner file = new Scanner(new File("/Volumes/NO_NAME/advancedCompSci/StringAlgorithms/frankenstein.txt"));//Mac
    //Scanner file = new Scanner(new File("G:/advancedCompSci/StringAlgorithms/frankenstein.txt"));//Windows
    while(file.hasNext()){
      book+=file.nextLine()+" ";
    }file.close();
  }catch(FileNotFoundException e){
    System.out.println("The file could not be found");
  }catch(Exception e){
    e.printStackTrace();
  }parse = new StringParser(book);
  frankEase = fleschReadingEase(parse);
  frankGrade = (int)fleschKincaidGradeLevel(parse);
  System.out.println("Frankenstein Reading Ease "+String.format("%.2f", frankEase));
  System.out.println("Frankenstein Grade Level: "+frankGrade);
}

void draw(){
  image(isOver(width/4, width/2, 0, height)? carolOpen: carolCover, 0, 0, width/2, height);
  image(isOver(3*width/4, width, 0, height)? frankOpen: frankCover, width/2, 0, width/2, height);
  if(isOver(width/4, width/2, 0, height)){//carol
    fill(0);
    textSize(40);
    text("Ease of Reading: "+String.format("%.2f", carolEase), width/14, 1.9*height/3);
    text("Grade Level: "+carolGrade, width/7, 3.4*height/4);
  }//if not then closed
  if(isOver(3*width/4, width, 0, height)){//frank
    fill(0);
    textSize(60);
    text("Frankenstein", 4.9*width/8, height/4);
    textSize(40);
    text("Ease of Reading: "+String.format("%.2f", frankEase), 4.7*width/8, 1.5*height/4);
    text("Grade Level: "+frankGrade, 5.2*width/8, height/2);
  }else{//closed
    fill(255);
    textSize(70);
    text("Frankenstein", 4.7*width/8, 1.5*height/4);
    text("By", 5.9*width/8, height/2);
    text("Marry Shelly", 4.8*width/8, 2.5*height/4);
  }
}

private boolean isOver(int x1, int x2, int y1, int y2){
  return (mouseX<x2&&mouseX>x1&&mouseY<y2&&mouseY>y1);
}

public double fleschReadingEase(StringParser p){
  return 206.835-1.015*(p.countWords()/p.countSentences())-84.6*(p.countSyllables()/p.countWords());
}

public double fleschKincaidGradeLevel(StringParser p){
  return 0.39*(p.countWords()/p.countSentences())+11.8*(p.countSyllables()/p.countWords())-15.59;
}

public class StringParser{
  String para, original;
  String[] words;
  StringParser(String paragraph){
    original = paragraph;
    para = paragraph.toLowerCase();
    words = para.split("[\\,!\\s]+");//add regex inside
  }
  
  public int countWords(){
    return words.length;
  }
  
  public int countVowels(String s){
    int count = 0;
    String[] temp = s.split("[\\,!.\\s]+");
    for(int i=0; i<temp.length; i++){
      for(int j=0; j<temp[i].length(); j++){
        count = isVowel(temp[i].charAt(j)) ? count+1 : count;
      }
    }return count;
  }
  
  public int countSyllables(){
    int count = 0, tempNum = 0;
    String temp;
    for(int i=0; i<words.length; i++){
      tempNum = countVowels(words[i]);
      temp = words[i];
      if(temp.length()>1){
        for(int j=0; j<temp.length()-1; j++){
          tempNum = isVowel(temp.charAt(j))&&isVowel(temp.charAt(j+1)) ? tempNum-1 : tempNum;
        }tempNum = temp.charAt(temp.length()-1)=='e' ? tempNum-1 : tempNum;
      }count = tempNum<1 ? count+1 : count+tempNum;
    }return count;
  }
  
  private Boolean isVowel(char c){
    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='y';
  }
  
  public int countSentences(){
    return para.split("[\\!.]").length;//add regex into split
  }
}
