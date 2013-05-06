main: main.o sort.o merge.o
	gcc $^ -o $@

main.o: main.c sort.h
sort.o: sort.c merge.h main.h
merge.o: merge.c main.h

clean:
	-rm *.o

.PHONY: clean
