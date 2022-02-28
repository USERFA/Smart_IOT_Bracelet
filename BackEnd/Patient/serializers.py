from rest_framework import serializers
from Patient.models import Patients,Tuteurs,Médecins,messages

class PatientSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = ('PatientId', 
                  'PatientName',
                  'PatientAge',
                  'PatientAdress',
                  'PatientCin',
                  'ChestPainType',
                  'Cholesterol',
                  'FastingBS',
                  'RestingECG',
                  'ExerciseAngina',
                  'oldpeak',
                  'ST_Slope',
                  'idMédecin')

class MédecinSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Médecin
        fields = ('MédecinId', 
                  'MédecinName',
                  'MédecinAge',
                  'MédecinCin',
                  'Hospital')    

class TuteurSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Tuteurs
        fields = ('TuteurId', 
                  'TuteurName',
                  'TuteurAge',
                  'TuteurNum',
                  'TuteurAdress',
                  'TuteurCin',
                  'idPatient') 

class MessageSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ('Message', 
                  'idDestinataire',
                  'idEmetteur')                                     