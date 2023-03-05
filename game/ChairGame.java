package game;


import java.util.Arrays;
import java.util.Scanner;

public class ChairGame {
    private String[] contestants;
    private int[] songStopInSec;

    public ChairGame(String[] contestants, int[] songStopInSec) {
        this.contestants = contestants;
        this.songStopInSec = songStopInSec;
    }

    public int getWinnerIndex() {
        int remaining = contestants.length;
        int currentIndex = 0;
        int secondsCount = 0;

        while (remaining > 1) {
            currentIndex = (currentIndex + 1) % contestants.length;
            if (contestants[currentIndex] != null) {
                secondsCount++;
            }
            if (secondsCount == songStopInSec[currentIndex % songStopInSec.length]) {
                System.out.printf("Contestant %s at index %d has been eliminated\n", contestants[currentIndex], currentIndex);
                contestants[currentIndex] = null;
                secondsCount = 0;
                remaining--;
            }
        }

        return Arrays.asList(contestants).indexOf(contestants[0]);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of contestants: ");
        int n = scanner.nextInt();
        scanner.nextLine();

        String[] contestants = new String[n];
        for (int i = 0; i < n; i++) {
            System.out.printf("Enter the name of contestant %d: ", i + 1);
            contestants[i] = scanner.nextLine();
        }

        int[] songStopInSec = {3, 1, 1};

        ChairGame mc = new ChairGame(contestants, songStopInSec);
        int winnerIndex = mc.getWinnerIndex();

        System.out.printf("Winner: %s at index %d\n", contestants[winnerIndex], winnerIndex);

        scanner.close();
    }
}
