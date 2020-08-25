#!/bin/bash

#VARIAVELTESTE="ShellScript com variável é demais"
read -p "Digite o caminha completo para o arquivo ou diretório" PATH
#if [ -e $PATH ]
#then 
#echo "O caminho está habilitado para $PATH"
#fi
#if [ -x $PATH ]
#then
#echo "Você tem permissão para escrita de $PATH"
#else
#echo "Você não tem permissão para escrita de $PATH"
#fi

case $PATH in
-d) echo "É um diretório" ;;
-f) echo "É um arquivo comum" ;;
*) echo "É um outro tipo de arquivo" ;;
esac
