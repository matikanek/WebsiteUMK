#include <stdio.h>
#include <time.h>

// ---------------------------------- Program generuj¹cy zadania na dodawanie 
// 										i odejmowanie dla Piotrka

int main(){
	int x, i;
	FILE *fp;
	
	if ((fp=fopen("tablica_k.txt", "w"))==NULL) {
    	printf ("Nie mogê otworzyæ pliku tablica_k.txt do zapisu!\n");
    	exit(1);
    }
    scanf("%d", &x);
    fprintf(fp, "ile_hasel = %d\n\n", x-1);
    fprintf(fp, "var haslo = new Array(ile_hasel);\n");
    printf("Jak wielka tablice chcesz miec? ");
	
	for(i=0; i<x; i++){
		fprintf(fp, "haslo[%d] = \"\";\n", i);
	}
	fprintf(fp, "\n");
	i=0;
	fprintf(fp, "var tipsy = new Array(ile_hasel);\n");
	for(i=0; i<x; i++){
		fprintf(fp, "tipsy[%d] = \"\";\n", i);
	}
	
	fclose(fp);
	
	system("pause");
	return 0;
}
